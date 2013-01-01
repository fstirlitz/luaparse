DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
REMOTE="https://github.com/oxyc/luaparse.git"
DEST="$DIR/bench-luaparse"
GIT_FLAGS="--git-dir=$DEST/.git --work-tree=$DEST/"

[[ -t 1 ]] && piped=0 || piped=1
processor="$DIR/../node_modules/.bin/node-tick-processor"
samples=1000
js=0
lua=0
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
  -s, --samples       Specify the sample count. Defaults to 1000.
  -p, --processor     Specify the path to the tick-processor. Defaults to
                      $processor
  -v, --verbose       Display verbose messages
  -h, --help          Display this help and exit
"
}

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

printNodeScript() {
  local file=$1
  local samples=$2
  echo "
    var Benchmark = require('./node_modules/benchmark/benchmark.js')
      , luaparse = require('$file')
      , fs = require('fs')
      , suite = new Benchmark.Suite()
      , script = fs.readFileSync('./benchmarks/lib/ParseLua.lua', 'utf-8');

    suite.add('parselua', function() {
      luaparse.parse(script);
    }, { minSamples: $samples });

    suite.on('cycle', function(e) {
      var ms = e.target.times.period * 1000;
      console.log('luaparse\t' + ms.toFixed(4));
    });
    suite.run();
  "
}

benchLuaparse() {
  node -e "$(printNodeScript "$DEST/index" "$samples")"
  [[ $? -ne 0 ]] && die "Benchmark failed"
}

benchLuaminify() {
  local lua="$1"
  local exp='export LUA_PATH="~/.luarocks/share/lua/5.1/?.lua;;?.lua;lib/?.lua;"'
  local time=$($exp; $lua -e "
    require '$DIR/lib/ParseLua'
    require 'socket'

    do
      local inf = io.open('$DIR/lib/ParseLua.lua', 'r');
      local text = inf:read('*all');
      inf:close();
      local results = {}
      local total = 0;

      for i=1,$samples do
        local start = socket.gettime()
        local ast = ParseLua(text)
        local time = (( socket.gettime() - start ) * 1000)
        total = total + time
      end
      print (total / $samples)
    end
  ")
  echo -e "luaminify $lua\t $time"
}

runD8() {
  local commit=$1
  local output="logs/$commit"
  local script="$(printNodeScript "$DEST/index" "1")"

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

  for fn in inlining bailout deopt opt; do
    node --trace_$fn --code_comments -e "$script" > $output/$fn
    success "Created $output/$fn ($(wc -c < $output/$fn) bytes)"
  done

  node --trace_hydrogen -e "$script" > /dev/null
  mv hydrogen.cfg $output/hydrogen.cfg
  success "Created $output/hydrogen.cfg ($(wc -c < $output/hydrogen.cfg) bytes)"

  node -e "$(printNodeScript "$DEST/index" "1000")" > $output/benchmark
  success "Created $output/benchmark ($(wc -c < $output/benchmark) bytes)"
}

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
      benchLuaminify "lua5.1"
      benchLuaminify "luajit-2.0.0-beta9"
    fi

    if ((d8)); then
      runD8 $commit
    fi
  fi
}

main() {
  [[ ! -d $DEST/.git ]] && git clone $REMOTE $DEST > /dev/null 2>&1
  for commit in "$@"; do
    benchmark "$commit"
  done
  rm -rf $DEST
}

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
    -s|--samples) shift; samples=$1 ;;
    -p|--processor) shift; processor=$1 ;;
    -v|--verbose) verbose=1 ;;
    --endopts) shift; break ;;
    *) die "invalid option: $1" ;;
  esac
  shift
done

main "$@"
