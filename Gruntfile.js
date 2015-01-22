/*
 * grunt-jshint-only
 * 
 *
 * Copyright (c) 2015 Emily Coco
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    jshint_only: {
        options: {
          es3: true,
          only: ['W024']
        },
        pass_test: {      
          files: {
            src: ['test/fixtures/pass_test.js']
          }
        },
        fail_test: {      
          files: {
            src: ['test/fixtures/fail_test.js']
          }
        }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'jshint_only', 'nodeunit']);
  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
