/*
 * Generated on 2014-03-28
 * generator-assemble v0.4.11
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

/* jshint strict: false */
/* global module, require */
var path = require('path');

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'
module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Amazon Configuration
  var deployConfig = {};
  // Development
  var deployConfigPath = path.resolve(__dirname, 'deploy.yaml');
  try {
      deployConfig = grunt.file.readYAML(deployConfigPath);
      //grunt.log.write('deployConfig', JSON.stringify(deployConfig));
  } catch (e) {
      grunt.log.error('No deploy configuration file found at "'+deployConfigPath+'".');
  }

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist'
    },

    deploy: deployConfig,

    watch: {
      assemble: {
      files: ['<%= config.src %>/{content,data,templates}/{,*/}*.{md,hbs,yml,json}'],
        tasks: ['assemble']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    connect: {
      options: {
        port: 9001,
        livereload: 35730,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs',
          plugins: ['assemble-contrib-anchors','assemble-contrib-permalinks','assemble-contrib-sitemap','assemble-contrib-toc'],
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}'],

    s3: {
        options: {
            access: 'public-read',
            headers: {
                // Two Year cache policy (1000 * 60 * 60 * 24 * 730)
                'Cache-Control': 'max-age=630720000, public',
                'Expires': new Date(Date.now() + 63072000000).toUTCString()
            }
        },
        www: {
            options: {
                key: '<%= deploy.s3.key %>',
                secret: '<%= deploy.s3.secret %>',
                bucket: '<%= deploy.s3.bucket %>'
            },
            upload: [
                {
                    src: 'dist/*.html',
                    rel: path.basename(path.resolve(__dirname, 'dist')),
                    dest: '',
                    options: { gzip: true }
                },
                {
                    src: 'dist/assets/css/*.css',
                    rel: path.basename(path.resolve(__dirname, 'dist')),
                    dest: '',
                    options: { gzip: true }
                },
                {
                    src: 'dist/assets/js/*.js',
                    rel: path.basename(path.resolve(__dirname, 'dist')),
                    dest: '',
                    options: { gzip: true }
                },
                {
                    src: 'dist/assets/font/*',
                    rel: path.basename(path.resolve(__dirname, 'dist')),
                    dest: '',
                    options: { gzip: true }
                },
                {
                    src: 'dist/assets/*.png',
                    rel: path.basename(path.resolve(__dirname, 'dist')),
                    dest: '',
                    options: { gzip: true }
                },
                {
                    src: 'dist/assets/*.ico',
                    rel: path.basename(path.resolve(__dirname, 'dist')),
                    dest: '',
                    options: { gzip: true }
                },
                {
                    src: 'dist/assets/img/*',
                    rel: path.basename(path.resolve(__dirname, 'dist')),
                    dest: '',
                    options: { gzip: true }
                }
            ]
        }
    }

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-s3');

  grunt.registerTask('serve', [
    'clean',
    'assemble',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'assemble'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.registerTask('deploy', [
    'build',
    's3'
  ]);

};
