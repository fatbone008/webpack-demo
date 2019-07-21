const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    mode: 'development',
    entry: {
        app: './src/index.js',
        // another: './src/another-module.js'
    },
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: 'Output Management'
    //     })
    // ],
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './Base'
    // },
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "/"
    },
    // optimization: {
    //     //     splitChunks:{
    //     //         chunks: "all"
    //     //     }
    //     // }
}