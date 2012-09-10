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

    // Build
    staging: 'temp',
    output: 'dist',
    mkdirs: { staging: 'app/' },

    // Minification
    concat: {
      dist: {
        src: [
          '<config:meta.banner>',
          'src/luaparse.js'
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
      files: ['test/**/*.js']
    },
    mocha: {
      index: ['test/*.html']
    },


    // Linting
    lint: {
      beforeconcat: ['Gruntfile.js', 'bin/*'],
      afterconcat: ['<config:concat.dist.dest>']
    },
    jshint: {
      options: {
        curly: false,
        eqeqeq: true,
        forin: true,
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        quotmark: 'single',
        regexp: true,
        undef: true,
        unusd: true,
        trailing: true,
        sub: true,
        boss: true,
        eqnull: true,
        laxcomma: true
      },
      globals: {
        exports: true,
        module: false,
        define: true
      }
    },
    watch: {}
  });

  grunt.registerTask('test', 'mocha');
  grunt.registerTask('default', 'concat min lint');

  // Override what yeoman provides
  grunt.registerTask('build', 'concat min lint');

};
