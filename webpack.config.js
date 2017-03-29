var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './components/app.js',
    output: { path: __dirname + '/components', filename: 'bundle.js' },
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};