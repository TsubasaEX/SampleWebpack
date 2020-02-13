const path = require('path')

module.exports = {
    // this is actually the configuration webpack uses
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'js/build.js'
    }
}