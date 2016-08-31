var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname, 'static');
module.exports = {
    entry: [
        // 'webpack-dev-server/client?http://localhost:3000',
        // 'webpack/hot/only-dev-server',
        path.resolve(ROOT_PATH, 'src/index')
    ],
    output: {
        path: path.join(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    devtool: "#inline-source-map",
    module: {
        loaders: [{
            test: /\.(js|jsx|es6)$/,
            exclude: /node_modules/,
            loaders: ['react-hot','babel']
        }]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin()
    ]

};
