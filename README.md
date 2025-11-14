# grunt-json-minification

[![npm version](https://img.shields.io/npm/v/grunt-json-minification.svg)](https://www.npmjs.com/package/grunt-json-minification)
[![GitHub release](https://img.shields.io/github/release/miguelcolmenares/grunt-json-minification.svg)](https://github.com/miguelcolmenares/grunt-json-minification/releases)
[![Test](https://github.com/miguelcolmenares/grunt-json-minification/actions/workflows/test.yml/badge.svg)](https://github.com/miguelcolmenares/grunt-json-minification/actions/workflows/test.yml)
[![Compatibility](https://github.com/miguelcolmenares/grunt-json-minification/actions/workflows/compatibility.yml/badge.svg)](https://github.com/miguelcolmenares/grunt-json-minification/actions/workflows/compatibility.yml)
[![CodeQL](https://github.com/miguelcolmenares/grunt-json-minification/actions/workflows/codeql.yml/badge.svg)](https://github.com/miguelcolmenares/grunt-json-minification/actions/workflows/codeql.yml)
[![Node.js Engine](https://img.shields.io/badge/node-%3E%3D18.14-brightgreen.svg)](https://nodejs.org/)
[![Grunt Compatibility](https://img.shields.io/badge/grunt-1.4.0%20%7C%201.5.3%20%7C%201.6.1-orange.svg)](https://gruntjs.com/)
[![License](https://img.shields.io/github/license/miguelcolmenares/grunt-json-minification.svg)](LICENSE)

> A modern, maintained fork of the grunt-json-minification plugin for minifying JSON files with Grunt.

This Grunt plugin minifies JSON files by removing whitespace and comments, helping reduce file sizes for production deployments. It provides detailed size reporting and supports all Grunt file expansion patterns.

## ✨ Features

- 🗜️ **JSON Minification**: Removes whitespace and comments from JSON files
- 📊 **Size Reporting**: Shows before/after file sizes with optional gzip comparison
- 🎯 **File Pattern Support**: Full Grunt file expansion with glob patterns
- ⚡ **Performance**: Fast processing with detailed verbose output
- 🛡️ **Error Handling**: Validates JSON syntax before processing
- 🧪 **Well Tested**: Comprehensive test suite with CI/CD

## 📦 Installation

### From npm (Original Package)
```bash
npm install grunt-json-minification --save-dev
```

### From GitHub (This Maintained Fork)
```bash
# Using npm
npm install miguelcolmenares/grunt-json-minification --save-dev

# Or using package.json
{
  "devDependencies": {
    "grunt-json-minification": "github:miguelcolmenares/grunt-json-minification"
  }
}
```

## 🚀 Getting Started

This plugin requires **Grunt `>=1.4.0`** and **Node.js `>=18.14`**.

**Tested and compatible with:**
- ✅ Grunt 1.4.0 - 1.6.1
- ✅ Node.js 18.x, 20.x, 22.x
- ✅ Windows, macOS, Linux

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide. Once you're familiar with that process, enable this plugin in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-json-minification');
```

## ⚙️ Configuration

### Basic Usage

```js
grunt.initConfig({
  json_minification: {
    options: {
      report: 'min' // 'min', 'gzip' or false
    },
    target: {
      files: [{
        expand: true,
        cwd: 'src/',
        src: ['**/*.json'],
        dest: 'dist/',
        ext: '.min.json'
      }]
    }
  }
});
```

### Options

#### options.report
Type: \`String\` | \`Boolean\`  
Default: \`'min'\`

Controls the type of size reporting:
- \`'min'\`: Shows minified size comparison  
- \`'gzip'\`: Shows gzipped size comparison
- \`false\`: Disables size reporting

## 📖 Usage Examples

### Minify JSON files in place
```js
json_minification: {
  build: {
    files: [{
      expand: true,
      cwd: 'app/data/',
      src: ['*.json', '!*.min.json'],
      dest: 'app/data/',
      ext: '.min.json'
    }]
  }
}
```

### Process specific files
```js
json_minification: {
  config: {
    files: {
      'dist/config.min.json': 'src/config.json',
      'dist/manifest.min.json': 'src/manifest.json'
    }
  }
}
```

### Multiple targets with different options
```js
json_minification: {
  options: {
    report: 'gzip'
  },
  production: {
    files: [{
      expand: true,
      cwd: 'src/data/',
      src: ['**/*.json'],
      dest: 'dist/data/',
      ext: '.min.json'
    }]
  },
  development: {
    options: {
      report: false
    },
    files: [{
      expand: true,
      cwd: 'src/config/',
      src: ['*.json'],
      dest: 'tmp/config/',
      ext: '.json'
    }]
  }
}
```

## 🔧 Task Options

Run this task with the \`grunt json_minification\` command.

Task targets, files and options may be specified according to the [Grunt Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

## 🧪 Testing

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint
```

## 📈 Why This Fork?

The original [grunt-json-minification](https://github.com/redpancho/grunt-json-minification) package hasn't been updated since 2017. This fork provides:

- ✅ **Security Updates**: Fixed critical vulnerabilities in dependencies
- ✅ **Modern Node.js**: Support for Node.js 16+ with latest Grunt
- ✅ **Active Maintenance**: Regular updates and dependency management
- ✅ **Improved CI/CD**: Modern GitHub Actions workflows
- ✅ **Better Documentation**: Comprehensive README with examples

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)  
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/miguelcolmenares/grunt-json-minification.git
cd grunt-json-minification

# Install dependencies
npm install

# Run tests in watch mode
npm run test:watch
```

## 📄 License

[MIT License](LICENSE) © 2015 redpancho, 2024 Miguel Colmenares

## 📚 Related Projects

- [jsonminify](https://www.npmjs.com/package/jsonminify) - The underlying JSON minification library
- [maxmin](https://www.npmjs.com/package/maxmin) - File size comparison utility used for reporting
- [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - JavaScript minification for Grunt

## 📋 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.
