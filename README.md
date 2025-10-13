# grunt-json-minification v0.2.2

[![Version](https://img.shields.io/github/package-json/v/miguelcolmenares/grunt-json-minification.svg)]()
[![CodeQL](https://github.com/miguelcolmenares/grunt-json-minification/actions/workflows/codeql.yml/badge.svg)](https://github.com/miguelcolmenares/grunt-json-minification/actions/workflows/codeql.yml)
[![Grunt](https://img.shields.io/github/package-json/dependency-version/miguelcolmenares/grunt-json-minification/dev/grunt/master.svg)]()
[![Node Engine](http://img.shields.io/badge/node-16.x-brightgreen.svg)]()

> Minify JSON files in grunt.

## Getting Started
This plugin requires Grunt `~1.6.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-minification --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-minification');
```

## json_minification task
_Run this task with the `grunt json_minification` command._

### Usage Examples

#### Minify all contents of a release directory

```js
json_minification: {
  target: {
    files: [{
      expand: true,
      cwd: 'release/json',
      src: ['*.json', '!*.min.json'],
      dest: 'release/json',
      ext: '.min.json'
    }]
  }
}
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 2015-05-09   v0.1.0   Initial commit
