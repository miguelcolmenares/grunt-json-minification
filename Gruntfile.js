/*
 * grunt-json-minification
 * https://github.com/redpancho/grunt-json-minification
 *
 * Copyright (c) 2015 redpancho
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },
        // Configuration to be run (and then tested).
        json_minification: {
            default_options: {
                files: [
                    {
                        expand: true,
                        cwd: './test/fixtures',
                        src: '*.json',
                        dest: './tmp/',
                        ext: '.json'
                    }
                ]
            }
        }

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Build task: clean and run minification
    grunt.registerTask('build', ['clean', 'json_minification']);
    
    // Legacy test task for compatibility (now just builds, Jest handles testing)
    grunt.registerTask('test', ['build']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
