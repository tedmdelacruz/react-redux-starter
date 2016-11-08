var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        "./src/js/index.js",
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: "app.js",
        publicPath: "/js/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src/js')
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