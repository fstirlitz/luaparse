DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
URL="https://github.com/oxyc/luaparse/commit"
LOGS="$DIR/../logs"

bench() {
  local post="$(echo "$1" | cut -c1-5)"
  local pre="$(git rev-parse $post~ | cut -c1-5)"
  local name=$2
  local preDir="$LOGS/$name-pre-$pre"
  local postDir="$LOGS/$name-post-$post"

  $DIR/run.sh -v --d8 $pre $post

  [[ -d "$preDir" ]] && rm -rf $preDir
  [[ -d "$postDir" ]] && rm -rf $postDir
  mv $LOGS/$pre $preDir
  mv $LOGS/$post $postDir

  local commitDate="$(git show -s --format="%ci" "$post")"
  local hzPre="$(cat $preDir/benchmark)"
  local hzPost="$(cat $postDir/benchmark)"
  local diff="$(git show $post)"

  echo "
Pre: $URL/$pre
Post: $URL/$post

Hz Pre: $hzPre
Hz Post: $hzPost

Date: $commitDate
-----------------------------------------------------------
$diff" > $postDir/summary
}

# Bailouts
# https://github.com/oxyc/luaparse/commit/c20df1
# https://github.com/oxyc/luaparse/commit/5521bc
bench "5521bc" "bailouts"

# charCodeAt
# https://github.com/oxyc/luaparse/commit/7c0942
# https://github.com/oxyc/luaparse/commit/e77014
bench "e77014" "charCodeAt"

# Enum flags
# https://github.com/oxyc/luaparse/commit/e77014
# https://github.com/oxyc/luaparse/commit/76c9ed
bench "76c9ed" "enumflags"

# Raw data to literals
# https://github.com/oxyc/luaparse/commit/90370f
# https://github.com/oxyc/luaparse/commit/8ddd3a
bench "8ddd3a" "rawdata"

# Whitespace before newlines
# https://github.com/oxyc/luaparse/commit/4ade9d
# https://github.com/oxyc/luaparse/commit/b7e290
bench "b7e290" "skipwhitespace"

# Optimize StringAddStub
# https://github.com/oxyc/luaparse/commit/b7e290
# https://github.com/oxyc/luaparse/commit/d5c989
bench "d5c989" "stringaddstub"

# Optimize CompareICStub
# https://github.com/oxyc/luaparse/commit/d5c989
# https://github.com/oxyc/luaparse/commit/01d011
bench "01d011" "compareicstub"

# createToken
# https://github.com/oxyc/luaparse/commit/a57a2f
# https://github.com/oxyc/luaparse/commit/f8b3dd
bench "f8b3dd" "createtoken"

# charAt
# https://github.com/oxyc/luaparse/commit/f8b3dd
# https://github.com/oxyc/luaparse/commit/a2388d
bench "a2388d" "charat"

# Reorder for common cases
# https://github.com/oxyc/luaparse/commit/0b289c2
# https://github.com/oxyc/luaparse/commit/67a1d05
bench "67a1d05" "commoncase"

# Move out comments to allow inlining
# https://github.com/oxyc/luaparse/commit/67a1d0
# https://github.com/oxyc/luaparse/commit/71be22
bench "71be22" "inlining"

# Revert createToken
# https://github.com/oxyc/luaparse/commit/88af0c
# https://github.com/oxyc/luaparse/commit/a8455b
bench "a8455b" "revert-createtoken"
