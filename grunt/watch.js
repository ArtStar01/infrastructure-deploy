module.exports = function (grunt, options) {
    return {
        options: {
            livereload: true
        },
        jade: {
            options: { livereload: true },
            files: ['src/jade/**/*.jade'],
            tasks: ['jade']
        },
        sass: {
            options: { livereload: true },
            files: ['src/sass/**/*.scss'],
            tasks: ['sass']
        }
    };
};