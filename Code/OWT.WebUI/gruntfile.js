/// <binding />
/// <vs BeforeBuild='default' />
module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            options: { force: true },
            all: {
                src: ['../OWT.WebUI/app/appbuild.js', '../OWT.WebUI/app/template.js', "../OWT.WebUI/app/build/**/*.*"]
            }
        },
        //Convert all html to js-templates
        ngtemplates: {
            app: {
                cwd: '../OWT.WebUI/app/views/',
                src: '**/*.html',
                dest: '../OWT.WebUI/app/template.js',
                options: {
                    //prefix: '/app/views/',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives!
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            },
        },

        //ng-annotate adds and removes AngularJS dependency injection annotations
        ngAnnotate: {
            all: {
                files: [
					{
					    expand: true,
					    cwd: '../OWT.WebUI/app',
					    src: ['**/*.js'],
					    dest: '../OWT.WebUI/app/build/',
					    ext: '.js'
					}
                ]
            },
        },

        //Uglify and create .min.js
        uglify: {
            all: {
                files: [
					{
					    expand: true,
					    cwd: '../OWT.WebUI/app/build',
					    src: ['**/*.js'],
					    dest: '../OWT.WebUI/app/build/',
					    ext: '.min.js'
					}
                ]
            },
        },

        //Concat all .min.js files
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['../OWT.WebUI/app/build/**/*.min.js'],
                dest: '../OWT.WebUI/app/appbuild.js'
            },
        }
    });

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['clean', 'ngtemplates', 'ngAnnotate', 'uglify', 'concat']);
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-angular-templates');
};