/*globals module:true */
module.exports = function (grunt) {
  'use strict';

  function readOptionalJSON(filepath) {
    var data = {};
    try {
      data = grunt.file.readJSON(filepath);
      grunt.verbose.write('Reading ' + filepath + '...').ok();
    } catch(e) {}
    return data;
  }

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
          '<banner>',
          'lib/luaparse.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    min: {
      dist: {
        src: ['<banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },

    // Linting
    jslint: {
      dist: [
        'grunt.js',
        'package.json',
        'lib/*.js',
        'examples/**/*.js',
        'benchmarks/*.js'
      ],
      node: [
        'scripts/make-test',
        'scripts/pre-commit',
        'bin/*'
      ],
      test: ['test/spec/**/*.js'],
      html: ['examples/**/*.html', 'docs/**/*.html']
    },
    jshint: {
      options: readOptionalJSON('.jshintrc'),
      test: {
        options: readOptionalJSON('test/spec/.jshintrc')
      },
      html: {
        options: { browser: true, laxcomma: true }
      }
    },
    bashlint: {
      src: ['**/*.sh']
    }
  });

  grunt.loadNpmTasks('grunt-lint-inline');
  grunt.loadNpmTasks('grunt-lint-bash');
  grunt.renameTask('lint', 'grunt-lint');
  grunt.renameTask('lint-inline', 'jslint');
  grunt.registerTask('lint', 'jslint bashlint');
  grunt.registerTask('default', 'concat min lint');

  // Override what yeoman provides
  grunt.registerTask('build', 'concat min lint');

};
