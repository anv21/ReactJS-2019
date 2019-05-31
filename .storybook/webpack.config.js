var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

 module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
};
