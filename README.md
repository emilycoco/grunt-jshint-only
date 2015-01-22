# grunt-jshint-only

> A plugin to run code against only some jshint options.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-jshint-only --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jshint-only');
```

## The "jshint_only" task
_Run this task with the `grunt jshint_only` command._

### Overview
Most jshint grunt tasks will fail if any non-optional errors are encountered, this task allows you to specify exactly which errors will cause failures.
Find error codes here: [Jshint errors](http://jslinterrors.com).
In your project's Gruntfile, add a section named `jshint_only` to the data object passed into `grunt.initConfig()`.


```js
grunt.initConfig({
  jshint_only: {
    options: {
      only: ['W022'] //array of jshint option codes to fail grunt task if found, all others will be recorded, but not fail the task.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the codes 'W024' and 'W033' are passed in, so this task will fail only if either of the below errors are encountered in the scanned files:
W024: Expected an identifier and instead saw '{a}' (a reserved word)
W002: Value of '{a}' may be overwritten in IE8 and earlier

If you are checking for errors that jshint does not fail on default, for example, W024, set the error to true in options for the task.


```js
grunt.initConfig({
  jshint_only: {
    options: {
      es3: true,
      only: ['W024', 'W002']
    },
    files: {
      'dest': ['myApp/scripts/{,*/}*.js']
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Emily Coco. Licensed under the MIT license.
