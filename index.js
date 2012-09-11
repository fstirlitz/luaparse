module.exports = process.env.LUAPARSE_COV
  ? require('./lib-cov/luaparse')
  : require('./lib/luaparse');
