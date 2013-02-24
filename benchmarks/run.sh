DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
REMOTE="$DIR/.." # Clone local copy to get access to HEAD
DEST="$DIR/bench-luaparse"
GIT_FLAGS="--git-dir=$DEST/.git --work-tree=$DEST/"

# Variables
processor="$DIR/../node_modules/.bin/node-tick-processor"
minTime=10
samples=10
js=0
lua=0
esprima=0
verbose=0
full=0
quiet=0

usage() {
  echo -n "$0 [COMMIT]...

Benchmark luaparse at the the specified commit stages.

Options:
  --js                Benchmark js scripts
  --lua               Benchmark lua scripts
  --d8                Profile luaparse.js with d8
  --esprima           Profile esprima
  -m, --minTime       Specify the min time. Defaults to 10 (node specific)
  -s, --samples       Specify the samples. Defaults to 10
  -p, --processor     Specify the path to the tick-processor. Defaults to
                      $processor
  -v, --verbose       Display verbose messages
  -h, --help          Display this help and exit
"
}

# Helpers

out() { printf '%b\n' "$@"; }
err() { out "\033[1;31m✖\033[0m  $@"; } >&2
success() { (($verbose)) && out " \033[1;32m✔\033[0m  $@"; }
log() { (($verbose)) && out "$@"; }
die() { err "$@"; exit 1; } >&2
confirm() {
  read -p "$1 [Y/n] " -n 1;
  echo
  [[ $REPLY =~ ^[Yy]$ ]];
}

g() {
  log "Running git $GIT_FLAGS $@"
  git $GIT_FLAGS "$@" > /dev/null 2>&1
}

# Node Benchmark

printNodeScript() {
  local file=$1
  local minTime=${2:-10}
  echo "
    var Benchmark = require('./node_modules/benchmark/benchmark.js')
      , fs = require('fs')
      , script = fs.readFileSync('./benchmarks/lib/ParseLua.lua', 'utf-8')
      , luaparse = require('$file')
      , bench;

     bench = Benchmark({
        fn: function() {
        luaparse.parse(script);
      }
      , onComplete: function(e) {
        var target = e.target
          , variance = target.stats.variance * 1000 * 1000
          , stats = [
              target.stats.mean * 1000
            , Math.sqrt(variance)
            , variance
          ];
        console.log('luaparse\t' + stats.join('\t'));
      }
      , minTime: $minTime
      , minSamples: $samples
    });
    bench.run();
  "
}

benchLuaparse() {
  node -e "$(printNodeScript "$DEST/index" "$minTime")"
  [[ $? -ne 0 ]] && die "Benchmark failed"
}

# Esprima benchmark

benchEsprima() {
  local minTime=$1
  local file="${2:-./benchmarks/lib/parse-js.js}"
  node -e "
    var Benchmark = require('./node_modules/benchmark/benchmark.js')
      , fs = require('fs')
      , script = fs.readFileSync('$file', 'utf-8')
      , esprima = require('esprima')
      , falafel = require('falafel')
      , bench
      , nodes = 0;

     falafel(script, function(node) { nodes++; });
     console.log('Nodes: ' + nodes);

     bench = Benchmark({
        fn: function() {
        esprima.parse(script, { comments: true, loc: false });
      }
      , onComplete: function(e) {
        var target = e.target
          , variance = target.stats.variance * 1000 * 1000
          , stats = [
              target.stats.mean * 1000
            , Math.sqrt(variance)
            , variance
          ];
        console.log('esprima\t' + stats.join('\t'));
      }
      , minTime: $minTime
      , minSamples: 10
    });
    bench.run();
  "
}

# Luaminify benchmark

benchLuaminify() {
  local lua="$1"
  local samples=$2
  local exp='export LUA_PATH="~/.luarocks/share/lua/5.1/?.lua;;?.lua;lib/?.lua;"'
  local time=$($exp; $lua -e "
    require '$DIR/lib/ParseLua'
    require 'socket'

    function getMean(res)
      local total, count = 0, 0
      for key,value in pairs(res) do
        total = total + value
        count = count + 1
      end
      return total / count
    end

    function getVariance(res, mean)
      local total, count = 0, 0
      for key,value in pairs(res) do
        total = total + (value - mean)^2
        count = count + 1
      end
      return total / (count - 1)
    end

    function getDeviation(variance)
      return (math.sqrt(variance))
    end

    do
      local inf = io.open('$DIR/lib/ParseLua.lua', 'r');
      local text = inf:read('*all');
      inf:close();
      local results = {}

      for i=0,$samples do
        local start = socket.gettime()
        ParseLua(text)
        local time = (( socket.gettime() - start )) * 1000
        results[i] = time
      end
      local mean = getMean(results)
      local variance = getVariance(results, mean)
      local sd = getDeviation(variance)
      print (mean..'\t'..sd..'\t'..variance)
    end
  ")
  echo -e "luaminify $lua\t $time"
}

# Benchmark with d8 output

runD8() {
  local commit=$1
  local output="logs/$commit"
  local script="$(printNodeScript "$DEST/index" "0")"

  [[ ! -f $processor ]] && die "tick-processor not found at $processor"

  [[ -d "$output" ]] && rm -rf $output && success "Deleted old: $output"
  mkdir -p $output
  success "Created log directory: $output"

  node --prof -e "$script" > /dev/null

  # node-tick-processor doesn't take path argument
  $processor > $output/ticks
  success "Created $output/ticks ($(wc -c < $output/ticks) bytes)"

  mv v8.log $output/v8.log
  success "Created $output/v8.log ($(wc -c < $output/v8.log) bytes)"

  for fn in inlining bailout deopt opt gc; do
    node --trace_$fn --code_comments -e "$script" > $output/$fn
    success "Created $output/$fn ($(wc -c < $output/$fn) bytes)"
  done

  echo -e "script\tmean\tdeviation\tvariance" > $output/benchmark
  node -e "$(printNodeScript "$DEST/index" "$minTime")" >> $output/benchmark
  success "Created $output/benchmark ($(wc -c < $output/benchmark) bytes)"
}

# Main benchmark loop

benchmark() {
  local commit=$1
  g checkout $commit
  if [[ $? -ne 0 ]]; then err "Could not checkout $commit"
  else
    success "Checked out $commit"
    if ((js)); then
      benchLuaparse
    fi

    if ((lua)); then
      benchLuaminify "lua5.1" "$samples"
      benchLuaminify "luajit" "$samples"
    fi

    if ((esprima)); then
      benchEsprima "$minTime"
    fi

    if ((d8)); then
      runD8 $commit
    fi
  fi
}

# Initialize

main() {
  [[ ! -d $DEST/.git ]] && git clone $REMOTE $DEST > /dev/null 2>&1
  for commit in "$@"; do
    benchmark "$commit"
  done
  rm -rf $DEST
}

# Parse options

# Iterate over options breaking -ab into -a -b when needed and --foo=bar into
# --foo bar
optstring=h
unset options
while (($#)); do
  case $1 in
    # If option is of type -ab
    -[!-]?*)
      # Loop over each character starting with the second
      for ((i=1; i < ${#1}; i++)); do
        c=${1:i:1}

        # Add current char to options
        options+=("-$c")

        # If option takes a required argument, and it's not the last char make
        # the rest of the string its argument
        if [[ $optstring = *"$c:"* && ${1:i+1} ]]; then
          options+=("${1:i+1}")
          break
        fi
      done
      ;;
    # If option is of type --foo=bar
    --?*=*) options+=("${1%%=*}" "${1#*=}") ;;
    # add --endopts for --
    --) options+=(--endopts) ;;
    # Otherwise, nothing special
    *) options+=("$1") ;;
  esac
  shift
done
set -- "${options[@]}"
unset options

# Print help if no arguments were passed.
[[ $# -eq 0 ]] && set -- "--help"

# Read the options
while [[ $1 = -?* ]]; do
  case $1 in
    -h|--help) usage >&2; exit ;;
    --js) js=1 ;;
    --lua) lua=1 ;;
    --d8) d8=1 ;;
    --esprima) esprima=1 ;;
    -s|--samples) shift; samples=$1 ;;
    -m|--minTime) shift; minTime=$1 ;;
    -p|--processor) shift; processor=$1 ;;
    -v|--verbose) verbose=1 ;;
    --endopts) shift; break ;;
    *) die "invalid option: $1" ;;
  esac
  shift
done

main "$@"
