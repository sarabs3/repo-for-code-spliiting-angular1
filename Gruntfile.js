// Generated on 2013-12-08 using generator-angular 0.6.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    const fs = require('fs')
    , path = require('path')
    , user = process.env.CIRCLE_USERNAME || process.env.USER;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // webpack
        webpack: {
            myConfig: {
                mode: 'development',
                entry: './app/app',
                output: {
                    path: path.resolve(__dirname,'dist'),
                    filename: '[name].bundle.js',
                    chunkFilename: '[name].chunk.js'
                },
                dev: {
                    contentBase: path.resolve("dist"),
                    hot: true,
                    host: process.env.host || "localhost",
                    port: process.env.PORT || 5000
                },
                optimization: {
                  splitChunks: {
                      chunks: 'all'
                    // cacheGroups: {
                    //   vendor: {
                    //     chunks: 'initial',
                    //     name: 'vendor',
                    //     test: 'vendor',
                    //     enforce: true
                    //   },
                    // }
                  },
                  runtimeChunk: true
                }
            },
        },
        // serve
        serve: {
            options: {
                port: 9000,
                'app.js': {
                    tasks: ['webpack'],
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-serve');

    // register tasks
    // grunt.registerTask('serve', function (target) {
    //     if (target === 'dist') {
    //       return grunt.task.run(['build', 'connect:dist:keepalive']);
    //     }
    
    //     grunt.task.run([
    //        // 'sprite',
    //       'webpack',
    //     ]);
    //   });

}
