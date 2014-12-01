module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dist: {
                files: {
                    'js/app.js': ['src/*.*']
                },
                options: {
                    transform: [require('grunt-react').browserify]
                }
            }
        },

        uglify: {
            build: {
                src: 'js/app.js',
                dest: 'js/app.js'
            }
        },

        watch: {
            jsdev: {
                files: ['src/*.js', 'css/*.scss'],
                tasks: ['jsdev','sass']
            }
        },

        sass: {
            dist: {
                files: {
                    'css/app.css': 'css/app.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default tasks.
    grunt.registerTask('default', ['browserify', 'uglify', 'sass']);
    grunt.registerTask('jsdev', ['browserify', 'sass', 'watch:jsdev']);

};