/*
 * grunt-jshint-only
 * 
 *
 * Copyright (c) 2015 Emily Coco
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var jshint = require('../node_modules/grunt-contrib-jshint/tasks/lib/jshint.js').init(grunt);

  grunt.registerMultiTask('jshint_only', 'a plugin to run only code against only some jshint options.', function () {
    var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    });
    var only = options.only;
    delete options.only;

    jshint.lint(this.filesSrc, options, function(results, data) {
      var failed = true;
      if (only[0]) {
          results.forEach(function(result) {
              only.forEach(function(code) {    
              if (result.error.code === code) {
                  failed = false;
                  grunt.log.error(['ERROR: ' + result.error.raw.toString() + ' CODE: ' + result.error.evidence.toString()]);
              }
              });
          });
      }
      done(failed);
    });
  });

};
