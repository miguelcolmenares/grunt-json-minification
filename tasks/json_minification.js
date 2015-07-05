/*
 * grunt-json-minification
 * https://github.com/redpancho/grunt-json-minification
 *
 * Copyright (c) 2015 redpancho
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var util = require('util');
var maxmin = require('maxmin');
var jsonminify = require("jsonminify");

module.exports = function (grunt) {
    var getAvailableFiles = function (filesArray) {
        return filesArray.filter(function (filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.log.warn('Source file ' + filepath + ' not found');
                return false;
            }
            return true;
        });
    };

    grunt.registerMultiTask('json_minification', 'Minify JSON', function () {
        var created = {
            maps: 0,
            files: 0
        };
        var size = {
            before: 0,
            after: 0
        };

        this.files.forEach(function (file) {
            var options = this.options({});

            var availableFiles = getAvailableFiles(file.src);
            var compiled = '';

            options.target = file.dest;
            options.relativeTo = path.dirname(availableFiles[0]);

            try {
                compiled = JSON.minify(grunt.file.read(availableFiles));
            } catch (err) {
                grunt.log.error(err);
                grunt.warn('JSON minification failed at ' + availableFiles + '.');
            }

            var compiledJSONString = compiled;

            var unCompiledJSONString = availableFiles.map(function (file) {
                return grunt.file.read(file);
            }).join('');

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
