const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src", "index.js"),
    output:{
         path: path.resolve(__dirname, "build"),
         filename: "index.bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.join(__dirname, "index.html"),
        }),
    ],
    devServer:{
        historyApiFallback: true,
        hot: true,
    },
   
    module: {
        rules: [
         
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                type: 'asset/resource',
            },
        ]
    },
    devtool: 'inline-source-map',
};