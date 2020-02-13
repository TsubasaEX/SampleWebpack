const path = require('path')

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    // this is actually the configuration webpack uses
    mode: 'development',
    entry: {
        myfile:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'build'),
        filename: 'js/[name].[contenthash].js'
    }
}