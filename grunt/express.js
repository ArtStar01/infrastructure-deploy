module.exports = function (grunt, options) {
    return {
        all: {
            options: {
                port: 9000,
                hostname: 'localhost',
                bases: ['build/.'],
                livereload: true
            }
        }
    };
};