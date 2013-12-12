/*
Dawson Reid
Glavin Wiechert
*/

module.exports = function(grunt) {

     require('matchdep').filterDev('grunt-*').forEach(
             grunt.loadNpmTasks);


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        // server
        express: {
            all: {
                options: {
                    port: 1234, 
                    hostname: '0.0.0.0',
                    bases: ['www'],
                    livereload: true
                }
            }
        },
        open: {
            all: {
                path: 'http://localhost:1234/index.html'
            }
        },


        // compile 
        less: {
            compile: {
                files: {
                    'www/style.css': 'less/main.less'
                }
            }
        },
        jade: {
            compile: {
                options: {
                    pretty: true
                },
                files: {
                    'www/index.html': [ 'jade/index.jade' ],
                    'www/reports.html': [ 'jade/reports.jade' ],
                    'www/test.html': [ 'jade/test.jade' ]
                }
            }
        },
        browserify: {
            compile: {
                files: {
                    'www/main.js': [ 'js/main.js' ]
                }
            }
        }, 


        // file watchers
        watch: {
            options: {
                livereload: true
            },
            less: {
                files: [
                    'less/*.less'
                ],
                tasks: [
                    'less:compile'
                ]
            },
            jade: {
                files: [
                    'jade/*.jade'
                ],
                tasks: [
                    'jade:compile'
                ]
            },
            js: {
                files: [
                    'js/*.js'
                ],
                tasks: [
                    'browserify:compile'
                ]
            },

            // server reload
            server: {
                options: {
                    nospawn: true
                },
                files: [
                    'www/*.html',
                    'www/main.js',
                    'www/style.css',
                    'www/bower/*',
                    'www/static/*'
                ], 
                tasks: [
                    'express'
                ]
            }

        }
  });

  grunt.registerTask('compile', [
    'less:compile',
    'browserify:compile',
    'jade:compile'
  ]);

  // Default task(s).
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ]);
  grunt.registerTask('default', [
    'compile',
    'server'
  ]);

  //grunt.loadNpmTasks('grunt-contrib-watch');

  
};

