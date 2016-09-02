module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'assets/css/main.css' : 'assets/scss/main.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		serve: {
			options: {
            port: 9000,
						livereload: true,
						'path': '/Users/mrkumar3/FootballScheduleManagement/index.html'
        }
    }
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-serve');
	grunt.registerTask('build', ['sass','serve','watch']);

}
