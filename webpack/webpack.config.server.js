const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    name: 'server',
    target: 'node',
    entry: ['@babel/polyfill', './src/serverRenderer.js'],
    externals: [nodeExternals()],
    output: {
        filename: 'serverRenderer.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.(ttf|eot|svg|woff|png|jpg)$/,
                loader: "file-loader",
                options: {
                    name: "[path][name].[ext]?[hash]"
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
});
