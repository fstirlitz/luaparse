DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
REMOTE="$DIR/.." # Clone local copy to get access to HEAD
DEST="$DIR/bench-luaparse"
GIT_FLAGS="--git-dir=$DEST/.git --work-tree=$DEST/"

# Variables
D8=$(which d8 2>/dev/null)
processor="/opt/v8/tools/linux-tick-processor"
[[ "$D8" ]] && processor="$(realpath $(dirname $(readlink $D8))/../../tools/)/linux-tick-processor"
minTime=0
samples=5
js=0
profile=0
verbose=0

usage() {
  echo -n "$0 [COMMIT]...

Benchmark luaparse at the the specified commit stages.
While running the profiling tool you have to make sure your specified
tick-processor matches the V8-version used in the running node-version.

Examples:
  $0 --js HEAD~1 HEAD
  $0 --js --samples 1000 HEAD
  $0 -v --profile d2f038

Options:
  --js                Benchmark js scripts
  --profile           Profile luaparse.js with d8
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

runNodeBenchmark() {
  local file=$1
  local commit=$2
  echo "Commit $commit:"
  $REMOTE/scripts/benchmark -v \
    --luaparse="$file" --samples="$samples" --minTime="$minTime" \
    "benchmarks/lib/ParseLua.lua"
  echo
}

# Profile luaparse together with D8.
profileCommit() {
  local commit=$1
  local output="logs/$commit"
  local benchmark="scripts/benchmark benchmarks/lib/ParseLua.lua"

  # This relies on the commit having the required files.
  [[ ! -f "scripts/benchmark" ]] && die "The commit is outdated for profiling."
  [[ ! -f "benchmarks/lib/ParseLua.lua" ]] && die "The commit is outdated for profiling."
  [[ ! -f $processor ]] && die "tick-processor not found at $processor"

  [[ -d "$output" ]] && rm -rf $output && success "Deleted old: $output"
  mkdir -p $output
  success "Created log directory: $output"

  node --prof $benchmark > /dev/null

  $processor > $output/ticks
  success "Created $output/ticks ($(wc -c < $output/ticks) bytes)"

  mv v8.log $output/v8.log
  success "Created $output/v8.log ($(wc -c < $output/v8.log) bytes)"

  for fn in inlining bailout gc; do
    node --trace_$fn --code_comments $benchmark > $output/$fn
    success "Created $output/$fn ($(wc -c < $output/$fn) bytes)"
  done
}

# Main benchmark loop
benchmark() {
  local commit=$(git rev-parse $1)
  commit=${commit:0:6}
  g checkout $commit
  if [[ $? -ne 0 ]]; then err "Could not checkout $commit"
  else
    success "Checked out $commit"

    if ((js)); then
      log "Benchmarking commit $commit"
      runNodeBenchmark "$DEST/index" "$commit"
      [[ $? -ne 0 ]] && die "Benchmark failed"
    fi

    if ((profile)); then
      profileCommit $commit
    fi
  fi
}

# Initialize
main() {
  # Clone a copy where we can benchmark
  [[ ! -d $DEST/.git ]] && git clone $REMOTE $DEST > /dev/null 2>&1
  for commit in "$@"; do
    benchmark "$commit"
  done
  # Clean up
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
    --profile) profile=1 ;;
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
