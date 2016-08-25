var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname, 'static');
module.exports = {
    entry: path.resolve(ROOT_PATH, 'src/index'),
    output: {
        path: path.join(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    devtool: "#inline-source-map",
    module: {
        loaders: [{
            test: /\.(js|jsx|es6)$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
