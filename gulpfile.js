/* globals require: true */
var gulp = require('gulp')
  , header = require('gulp-header')
  , uglify = require('gulp-uglify')
  , rename = require('gulp-rename')
  , jshint = require('gulp-jshint')
  , filelog = require('gulp-filelog')
  , addsrc = require('gulp-add-src')
  , striphtml = require('gulp-striphtml')
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
      , '.{bowerrc,jshintrc}'
    ]))
    .pipe(filelog())
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
