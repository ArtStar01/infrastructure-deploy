module.exports = function (grunt, options) {
    return {
        build: {
            src: ['src/js/**/*.js', 'bower_components/jquery/dist/jquery.js'],
            dest: 'build/js/all.js'
        }
    };
};