module.exports = function (grunt, options) {
    return {
        dist: {                              // Target
            options: {                       // Target options
                style: 'expanded'
            },
            files: {                         // Dictionary of files
                'build/css/all.css': 'src/sass/all.scss'      // 'destination': 'source'
            }
        }
    };
};