/*globals module:true require:true */
module.exports = function (grunt) {
  'use strict';

  // With this we can still override options.
  function readOptionalJSON(filepath) {
    var data = {};
    try {
      data = grunt.file.readJSON(filepath);
      grunt.verbose.write('Reading ' + filepath + '...').ok();
    } catch(e) {}
    return data;
  }

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        stripBanners: true,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          ' * <%= pkg.homepage %>\n' +
          ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
          ' Licensed MIT\n' +
          ' */\n'
      },
      dist: {
        src: ['luaparse.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: { report: 'gzip' },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js' : ['<%= concat.dist.dest %>']
        }
      }
    },

    jshint: {
      options: readOptionalJSON('.jshintrc'),
      browser: {
        options: { browser: true, predef: { define: true, global: true, module: true } },
        src: [
          'luaparse.js',
          'examples/**/*.js',
          'benchmarks/*.js'
        ]
      },
      node: {
        options: { node: true },
        src: [
          'package.json',
          'bower.json',
          '.bowerrc',
          'component.json',
          'Gruntfile.js',
          'index.js',
          'scripts/*',
          'bin/*'
        ]
      },
      test: {
        options: { jshintrc: 'test/spec/.jshintrc' },
        src: ['test/spec/**/*.js']
      }
    },

    inlinelint: {
      options: readOptionalJSON('.jshintrc'),
      html: {
        options: {
          browser: true,
          laxcomma: true,
          globals: { YUI: true, prettyPrint: true, jQuery: true, luaparse:true }
        },
        src: ['examples/**/*.html', 'docs/**/*.html']
      }
    },

    bashlint: {
      src: ['**/*.sh']
    }
  });

  Object.keys(require('./package.json').devDependencies).forEach(function(dep) {
    if (dep.substring(0,6) === 'grunt-' && dep !== 'grunt-cli') grunt.loadNpmTasks(dep);
  });

  grunt.registerTask('lint', ['jshint', 'inlinelint', 'bashlint']);
  grunt.registerTask('build', ['concat', 'uglify']);
  grunt.registerTask('default', ['concat', 'uglify', 'lint']);
};
