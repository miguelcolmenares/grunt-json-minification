/*
 * grunt-json-minification
 * https://github.com/redpancho/grunt-json-minification
 *
 * Copyright (c) 2015 redpancho
 * Licensed under the MIT license.
 */

'use strict';

const path = require('path');
const util = require('util');
const maxmin = require('maxmin');
const jsonminify = require("jsonminify");

module.exports = grunt => {
    const getAvailableFiles = filesArray => filesArray.filter( filepath => {
        if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Source file ' + filepath + ' not found');
            return false;
        }
        return true;
    });

    grunt.registerMultiTask('json_minification', 'Minify JSON', function () {
        const created = {
            maps: 0,
            files: 0
        };
        const size = {
            before: 0,
            after: 0
        };

        this.files.forEach(file => {
            const options = this.options({});

            const availableFiles = getAvailableFiles(file.src);
            let compiled = '';

            options.target = file.dest;
            options.relativeTo = path.dirname(availableFiles[0]);

            try {
                JSON.parse(grunt.file.read(availableFiles));
                compiled = JSON.minify(grunt.file.read(availableFiles));
            } catch (err) {
                grunt.log.error(err);
                grunt.warn('JSON minification failed at ' + availableFiles + '.');
            }

            const compiledJSONString = compiled;

            const unCompiledJSONString = availableFiles.map(file => grunt.file.read(file)).join('');

            size.before += unCompiledJSONString.length;

            grunt.file.write(file.dest, compiledJSONString);
            created.files++;
            size.after += compiledJSONString.length;
            grunt.verbose.writeln('File ' + file.dest + ' created ' + maxmin(unCompiledJSONString, compiledJSONString, options.report === 'gzip'));

        }, this);

        if (created.files > 0) {
            grunt.log.ok(created.files + ' ' + grunt.util.pluralize(this.files.length, 'file/files') + ' created. ' + maxmin(size.before, size.after));
        } else {
            grunt.log.warn('No files created.');
        }
    });
};
