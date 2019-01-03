const path = require('path');
module.exports = {
    mode: 'development',
    entry: './app/core/bootstrap.js',
    output: {
        path: path.resolve(__dirname, 'app'),
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        compress: true,
        port: 9000
    }
}