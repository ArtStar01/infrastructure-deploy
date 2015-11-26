module.exports = function (grunt, options) {
    for(var i=0;i<10;++i){}
    return {
        build: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            files: {
                'build/js/all.min.js': ['build/js/all.js']
            }
        }
    };
};