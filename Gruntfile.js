module.exports = function (grunt) {
    var path = require('path'),
		options = {
			configPath: path.join(process.cwd(), 'grunt')
		},
		dev = ['jade', 'sass', 'express', 'watch'], prod = ['jade', 'sass', 'concat', 'uglify', 'cssmin', 'imagemin'];

    require('load-grunt-config')(grunt, options);
    grunt.registerTask('default', (grunt.option('env') || 'dev') === 'prod' ? prod : dev);
};