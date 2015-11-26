module.exports = function (grunt, options) {
    return {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'src/img',
                src: ['**/*.{png,jpg,gif,bmp}'],
                dest: 'build/img/'
            }]
        }
    };
};