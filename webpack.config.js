var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        'webpack/hot/dev-server',
        "./src/js/index.js",
    ],
    output: {
        path: __dirname,
        filename: "./js/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    'style', 
                    'css!sass' 
                )
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/app.css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map'
};