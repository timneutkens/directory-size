var Promise = Promise || require("bluebird");
const exec = require('child_process').exec;
function directorySize(directory) {
    return new Promise(
        function(resolve, reject) {
            exec( 'ls -A ' + directory + ' | wc -l', function (error, stdout) {
                if( !error ){
                    const filenumber = parseInt(stdout.trim());
                    resolve(filenumber)
                }
                else {
                    reject(error);
                }
            });
        }
    )
}

module.exports = directorySize;