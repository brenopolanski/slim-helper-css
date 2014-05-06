module.exports = function (grunt) {
	grunt.initConfig({
		autoprefixer: {
			file: {
				src: 'slim-helper.css'
			}
		},
		cssmin: {
			options: {
				banner: '/* Copyright 2014, All Rights Reserved. https://github.com/brenopolanski/slim-helper-css/ */'
			},
			dist: {
				src: 'slim-helper.css',
				dest: 'slim-helper.min.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['autoprefixer', 'cssmin']);
};
