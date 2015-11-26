module.exports = function (grunt, options) {
    return {
        compile: {
            options: {
                data: {
                    debug: false
                },
                pretty: true
            },
            files: [{
                expand: true,
                cwd: 'src/jade',
                src: '*.jade',
                dest: 'build',
                ext: '.html'
            }]
        }
    };
};