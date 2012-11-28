/*globals module:true */
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    // Meta
    pkg: "<json:package.json>",
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed MIT\n' +
        ' */'
    },

    // Minification
    concat: {
      dist: {
        src: [
          '<config:meta.banner>',
          'lib/luaparse.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<config:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    // Tests
    test: {
      files: ['test/spec/statement.js']
    },
    mocha: {
      index: ['test/*.html']
    },

    // Linting
    lint: {
      dist: {
        src: ['Gruntfile.js', 'lib/*.js'],
        options: {
          jshintrc: '.jshintrc'
        }
      },
      test: {
        src: ['test/spec/**/*.js'],
        options: {
          jshintrc: 'test/spec/.jshintrc'
        }
      }
    },
    watch: {}
  });

  // grunt.registerTask('test', 'mocha');
  grunt.registerTask('default', 'concat min lint');

  // Override what yeoman provides
  grunt.registerTask('build', 'concat min lint');

};
