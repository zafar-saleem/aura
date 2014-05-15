module.exports = function (grunt) {
	grunt.initConfig({

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			},
			target: {
				src: 'css/**/*.css'
			}
		}

	});
	
	grunt.loadNpmTasks('grunt-contrib-csslint');
	
	grunt.registerTask('default', ['csslint']);
}
