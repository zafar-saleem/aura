module.exports = function (grunt) {
	grunt.initConfig({

		copy: {
			dist: {
				cwd: 'demo/', expand: true, src: '**', dest: 'dist/'
			}
		},

		cssmin: {
			options: {},
			target: {
				src: 'dist/css/*.css',
				dest: 'dist/styles/styles.min.css'
			}
		},

		clean: ['dist/css/', 'dist/sass/'],

		processhtml: {
			dist: {
				files: {
					'dist/index.html': ['demo/index.html']
				}
			}
		}

	});
	
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-processhtml');
	grunt.loadNpmTasks('grunt-contrib-clean');
	
	grunt.registerTask('default', ['copy', 'cssmin', 'clean', 'processhtml']);
}
