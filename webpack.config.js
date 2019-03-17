const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: ["./src/index"],
    devtool: 'source-map',
    resolve: { extensions: ["*", ".js", ".jsx", "*.html"] },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/env", "@babel/preset-react"],
                    plugins: ["@babel/plugin-proposal-class-properties"]
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        port: 8080,
        hotOnly: true,
        contentBase: [path.join(__dirname, "public/")],
        watchContentBase: true,
        compress: true,
        publicPath: "/dist/"
    }
};