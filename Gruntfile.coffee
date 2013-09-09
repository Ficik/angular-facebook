module.exports = (grunt)->
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'
		uglify:
			src:
				options:
					beautify	: false
					report		: false
					compress	: true
					mangle		: true
					sourceMap	: 'angular-facebook.map.js'
				files:
					"angular-facebook.js" : [
						"src/angular-facebook-sdk.js"						
						"src/angular-facebook-plugins.js"
						"src/angular-facebook.js"
					]
		watch:
			"angular-facebook" :
				files: 'src/**.js'
				tasks: ['uglify:src']
				options:
					interrupt: true
	
	grunt.registerTask('default', ['uglify:src'])
	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-contrib-watch'
	return