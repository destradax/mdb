"use strict";
module.exports = function (grunt) {

	// Load all grunt tasks
	require("load-grunt-tasks")(grunt);

	// Configurable paths for the application
	var mdbConfig = {
		app: "app",
		dist: "dist",
		bower: "bower_components"
	};

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		conf: mdbConfig,

		// Copy bower dependencies
		bower: {
			default: {
				options: {
					expand: true
				},
				dest: "<%= conf.dist %>/<%= conf.bower %>"
			}
		},

		// Remove dist directory
		clean: {
			default: ["<%= conf.dist %>"]
		},

		// concatenate all js files (no uglification or minification involved).
		concat: {
			default: {
				src: ["<%= conf.app %>/scripts/**/*.js"],
				dest: "<%= conf.dist %>/mdb.js"
			}
		},

		// Copy files that do not need processing
		copy: {
			index: {
				src: "<%= conf.app %>/index.html",
				dest: "<%= conf.dist %>/index.html"
			},
			views: {
				expand: true,
				cwd: "<%= conf.app %>/views",
				src: "**/*.*",
				dest: "<%= conf.dist %>/views"
			},
			images: {
				expand: true,
				cwd: "<%= conf.app %>/img",
				src: "**/*.*",
				dest: "<%= conf.dist %>/img"
			}
		},

		// Start a server in the specified directory
		connect: {
			default: {
				options: {
					port: 8000,
					open: true,
					// Change this to "0.0.0.0" to access the server from outside.
					hostname: "localhost",
					base: "<%= conf.dist %>"
				}
			}
		},

		// Make sure there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: ".jshintrc",
				reporter: require("jshint-stylish")
			},
			default: {
				src: [
					"Gruntfile.js",
					"<%= conf.app %>/scripts/**/*.js"
				]
			}
		},

		// Compile lESS files
		less: {
			default: {
				files: {
					"<%= conf.dist %>/mdb.css": "<%= conf.app %>/styles/styles.less"
				}
			}
		},

		// Watch files for changes and rebuild
		watch: {
			default: {
				files: [
					"Gruntfile.js",
					".jshintrc",
					"bower.json",
					"<%= conf.app %>/scripts/**/*.js",
					"<%= conf.app %>/styles/**/*.less",
					"<%= conf.app %>/views/**/*.html",
					"<%= conf.app %>/index.html",
				],
				tasks: ["build"]
			},
		},

		// Autowire dependencies
		wiredep: {
			default: {
				options: {
					ignorePath: "../"
				},
				src: ["app/index.html"]
			}
		}
	});

	grunt.registerTask("build", ["clean", "jshint", "less", "wiredep", "copy", "bower", "concat"]);

	grunt.registerTask("default", ["build", "connect", "watch"]);
};
