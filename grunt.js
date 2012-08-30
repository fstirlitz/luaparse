/* jslint node:true */

module.exports = function (grunt) {
  var task = grunt.task;

  grunt.initConfig({
    pkg: "<json:package.json>",
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= pkg.homepage %>\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed MIT\n' +
        ' */'
    },
    test: {
      files: ['test/**/*.js']
    },
    concat: {
      dist: {
        src: [
          '<banner:meta.banner>',
          'src/core.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    mocha: {
      index: ['test/client/*.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint '
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
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-mocha');

  task.registerTask('test', 'mocha');
  task.registerTask('default', 'lint concat min');
};
