# Copilot Instructions: grunt-json-minification

## Project Overview
This is a Grunt plugin that minifies JSON files by removing whitespace and comments. The plugin uses the `jsonminify` library and provides file size reporting via `maxmin`.

## Architecture & Key Files

### Core Implementation
- **`tasks/json_minification.js`** - Main plugin implementation using `grunt.registerMultiTask`
- **`Gruntfile.js`** - Development configuration with test setup and plugin loading
- **`package.json`** - Defines this as a "gruntplugin" with key dependencies: `jsonminify`, `maxmin`, `chalk`

### Plugin Structure
The plugin follows Grunt's multi-task pattern:
```javascript
grunt.registerMultiTask('json_minification', 'Minify JSON', function () {
    // File processing with this.files.forEach()
    // Error handling with try/catch around JSON.parse()
    // Size reporting with maxmin()
});
```

## Development Workflow

### Testing
- **Run tests**: `npm test` (executes `grunt test`)
- **Test sequence**: `clean` → `json_minification` → `nodeunit`
- **Test files**: Input in `test/fixtures/`, expected output in `test/expected/`
- **Temp output**: Generated in `tmp/` directory (cleaned before each test)

### Code Quality
- **Linting**: JSHint with configuration in `.jshintrc`
- **Files linted**: `Gruntfile.js`, `tasks/*.js`, and test files
- **Default task**: Runs both linting and testing (`grunt jshint test`)

## Project-Specific Patterns

### File Processing Pattern
Uses Grunt's file expansion with these conventions:
```javascript
files: [{
    expand: true,
    cwd: 'source/path',
    src: ['*.json', '!*.min.json'],  // Exclude already minified
    dest: 'output/path',
    ext: '.min.json'                 // Change extension
}]
```

### Error Handling
- Validates JSON syntax with `JSON.parse()` before minification
- Uses `grunt.file.exists()` to filter available files
- Provides detailed error messages with file paths
- Warns on missing source files but continues processing

### Reporting Features
- Uses `maxmin` library for before/after size comparison
- Supports gzip reporting option (`options.report === 'gzip'`)
- Provides verbose output with `grunt.verbose.writeln()`
- Pluralizes output messages correctly

## Dependencies & Integration

### Runtime Dependencies
- **`jsonminify`** - Core minification (removes whitespace, comments)
- **`maxmin`** - File size comparison and reporting
- **`chalk`** - Terminal color output (v5.0.0, ESM-only)

### Development Dependencies
- **Testing**: `grunt-contrib-nodeunit` for unit tests
- **Linting**: `grunt-contrib-jshint` with strict configuration
- **Build**: `grunt-contrib-clean` for tmp directory management

## Configuration Notes
- Node.js 16+ required (specified in package.json engines)
- Uses strict mode throughout codebase
- JSHint configured for Node.js environment with strict rules (curly braces, equality checks, etc.)
- Plugin auto-loads tasks from `tasks/` directory in development Gruntfile