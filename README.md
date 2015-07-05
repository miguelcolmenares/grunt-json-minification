# grunt-json-minification v0.1.0

> Minify JSON files in grunt.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json-minification --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json-minification');
```

## json_minification task
_Run this task with the `grunt jsonminification` command._

### Usage Examples

#### Combine two files into one output file

```js
json_minification: {
  target: {
    files: {
      'output.json': ['foo.json', 'bar.json']
    }
  }
}
```

#### Minify all contents of a release directory

```js
json_minification: {
  target: {
    files: [{
      expand: true,
      cwd: 'release/json',
      src: ['*.json', '!*.min.json'],
      dest: 'release/json',
      ext: '.min.jsons'
    }]
  }
}


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 2015-05-09   v0.1.0  Initial commit
