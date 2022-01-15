/* globals require: true */
var gulp = require('gulp')
  , header = require('gulp-header')
  , uglify = require('gulp-uglify')
  , rename = require('gulp-rename')
  , jshint = require('gulp-jshint')
  , addsrc = require('gulp-add-src')
  , pkg = require('./package.json')
  , banner = [
      '/*!'
    , ' * @license'
    , ' * <%= pkg.name %> <%= pkg.version %> <%= pkg.homepage %>'
    , ' * Copyright 2012-<%= new Date().getFullYear() %> <%= pkg.author %>'
    , ' * MIT license'
    , ' */'
    , ''
  ].join('\n');

var striphtml = (function () {
  /* globals Buffer: true */
  'use strict';

  var PluginError = require('plugin-error')
    , through = require('through2');

  function removeHTML(src, patterns) {
    var lines = src.split('\n')
      , scriptSection = false
      , commentingSection = false;

    lines.forEach(function (line, i) {
      var starts = (/<script/i).test(line)
        , stops = (/<\/script/i).test(line)
        , commentStart = (/<!--/).test(line)
        , commentStop = (/-->/).test(line);

      if (starts && !(starts && stops)) {
        var type = line.match(/<script[^>]*type=['"]?([^\s"']*)[^>]*>/i);
        scriptSection = (type === null || type[1] === 'text/javascript');
        lines[i] = '';
      } else if (stops) {
        scriptSection = false;
      }

      if(!scriptSection && commentStart){
        commentingSection = true;
      }

      if (!scriptSection || commentingSection) {
        lines[i] = '';
      }

      if(commentStop){
        commentingSection = false;
      }
    });

    return lines.join('\n');
  }

  return function (options) {
    return through.obj(function processContent(file, enc, cb) {
      if (file.isNull()) {
        cb(null, file);
        return;
      }
      if (file.isStream()) {
        cb(new PluginError('gulp-striphtml', 'Streaming not supported'));
        return;
      }

      var res = removeHTML(file.contents.toString());
      file.contents = new Buffer(res);
      this.push(file);
      cb();
    });
  };
})();

gulp.task('build', function() {
  return gulp.src('luaparse.js')
    .pipe(header(banner, { pkg : pkg  } ))
    .pipe(gulp.dest('dist'))
    .pipe(uglify({ output: { comments: /^!|@preserve|@license|@cc_on/i } }))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src([
        'examples/**/*.html'
      , 'docs/!(coverage)/*.html'
    ])
    .pipe(striphtml())
    .pipe(addsrc([
        './*.{js,json}'
      , './test/{,spec}/*.js'
      , './{examples,benchmarks}/**/*.{js,json}'
      , '{bin,scripts}/*'
      , '.jshintrc'
    ]))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('version-bump', function () {
  var through = require('through2');

  return gulp.src('luaparse.js')
    .pipe(through.obj(function processContent(file, enc, cb) {
      var data = file.contents.toString();
      file.contents = new Buffer(data.replace(
        /(exports\.version\s*=\s*)(?:'[^']+'|"[^"]+")(;)/, function (_, s0, s1) {
          return s0 + JSON.stringify(pkg.version) + s1;
        }));
      this.push(file);
      cb();
    }))
    .pipe(gulp.dest('.'));
});
