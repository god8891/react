var webpack = require('webpack');

module.exports = {
    entry: {
        "/js-build/index" : './js/index.js'
    },
    output: {
        path: __dirname,
        filename: '[name].entry.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx$/,
            loader: 'babel-loader!jsx-loader?harmony'
        }]
    }
};