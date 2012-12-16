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
    lint: {
      dist: ['Gruntfile.js', 'lib/*.js'],
      node: ['scripts/*', 'bin/*'],
      test: ['test/spec/**/*.js']
    },
    jshint: {
      options: readOptionalJSON('.jshintrc'),
      test: {
        options: readOptionalJSON('test/spec/.jshintrc')
      }
    }
  });

  grunt.registerTask('default', 'concat min lint');

  // Override what yeoman provides
  grunt.registerTask('build', 'concat min lint');

};
