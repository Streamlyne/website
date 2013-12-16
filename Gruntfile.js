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

        // Copy
        copy: {
            main: {
                files: [ 
                {
                    src: 'img/*',
                    dest: 'www/'
                }, 
                {
                    src: 'font/*',
                    dest: 'www/'
                }
                ]
            }
        },

        // compile 
        less: {
            compile: {
                files: [
                {
                    'www/style.css': [ 'less/*.less' ]
                },
                {
                  cwd: "css",
                  src: "**/*.css",
                  dest: "www/css",
                  expand: true
                }]
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: [ {
                  cwd: "jade",
                  src: "**/*.jade",
                  dest: "www/",
                  expand: true,
                  ext: ".html"
                } ]
            }
        },
        browserify: {
            compile: {
                files: [ 
                    {
                        'www/main.js': [ 'js/main.js' ]
                    }
                ]
            }
        }, 
        uglify: {
          compile: {
            files: [{
                expand: true,
                src: '**/*.js',
                dest: 'www/js',
                cwd: 'js'
            }]
          }
        },

        // file watchers
        watch: {
            options: {
                livereload: true
            },

            copy: {
                files: [
                    'img/*'
                ],
                tasks: [
                    'copy:main'
                ]
            },

            less: {
                files: [
                    'less/*.less',
                    'css/*.css'
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
                    'uglify:compile',
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
    'uglify:compile',
    'browserify:compile',
    'jade:compile',
    'copy:main'
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

