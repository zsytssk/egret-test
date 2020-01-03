'use strict';
const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    watch: true,
    entry: ['./src/main.ts'],
    output: {
        filename: 'main.js',
        path: path.join(__dirname, 'egret/src'),
        publicPath: 'src/',
    },
    resolve: {
        modules: [path.resolve('./test'), path.resolve('./node_modules')],
        extensions: ['.ts', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(.*)?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    devServer: {
        clientLogLevel: 'silent',
        host: '0.0.0.0',
        contentBase: path.join(__dirname, 'egret'),
        disableHostCheck: true,
    },
};
