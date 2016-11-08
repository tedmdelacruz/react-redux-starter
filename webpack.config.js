var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/js/index.js",
    },
    output: {
        path: __dirname,
        filename: "./public/js/app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
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
    ],
    devtool: 'eval-source-map'
};