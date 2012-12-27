DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
REMOTE="https://github.com/oxyc/luaparse.git"
BENCHMARK="$DIR/../scripts/benchmark -v --samples=1000"
DEST="$DIR/luaparse"
SAMPLES="1000"
GIT_FLAGS="--git-dir=$DEST/.git"
[[ -t 1 ]] && piped=0 || piped=1
verbose=""

usage() {
  echo -n "$0 [COMMIT]...

Benchmark luaparse at the the specified commit stages.

Options: -v
"
}

out() { printf '%b\n' "$@"; }
err() { out "\033[1;31m✖\033[0m  $@"; } >&2
success() { [[ $verbose ]] && out " \033[1;32m✔\033[0m  $@"; }
die() { err "$@"; exit 1; } >&2
confirm() {
  read -p "$1 [Y/n] " -n 1;
  echo
  [[ $REPLY =~ ^[Yy]$ ]];
}

g() {
  git $GIT_FLAGS "$@" > /dev/null 2>&1;
}

benchLuaparse() {
  node -e "$(echo "
    var Benchmark = require('./node_modules/benchmark/benchmark.js')
      , luaparse = require('$DEST/index')
      , fs = require('fs')
      , suite = new Benchmark.Suite()
      , script = fs.readFileSync('./benchmarks/lib/ParseLua.lua', 'utf-8');

    suite.add('parselua', function() {
      luaparse.parse(script);
    }, { minSamples: $SAMPLES });

    suite.on('cycle', function(e) {
      var ms = e.target.times.period * 1000;
      console.log('luaparse\t' + ms.toFixed(4));
    });
    suite.run();
  ")"
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

      for i=1,$SAMPLES do
        local start = socket.gettime()
        local ast = ParseLua(text)
        local time = (( socket.gettime() - start ) * 1000)
        total = total + time
      end
      print (total / $SAMPLES)
    end
  ")
  echo -e "luaminify $lua\t $time"
}

benchmark() {
  local commit=$1
  g checkout $commit
  if [[ $? -ne 0 ]]; then err "Could not checkout $commit"
  else
    success "Checked out $commit"
    benchLuaparse
    benchLuaminify "lua5.1"
    benchLuaminify "luajit-2.0.0-beta9"
  fi
}

main() {
  [[ ! -d $DEST/.git ]] && git clone $REMOTE $DEST > /dev/null 2>&1
  for commit in "$@"; do
    benchmark "$commit"
  done
  rm -irf $DEST
}

[[ "$1" == "-v" ]] && { verbose=1; shift; }
[[ $# -eq 0 ]] && { usage >&2; exit; }
main "$@"
