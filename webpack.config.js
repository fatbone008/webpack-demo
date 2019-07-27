const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Caching'
        })
    ],
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './Base'
    // },
    output: {
        // filename: 'bundle.js',
        filename: '[name].[contenthash].js',
        // chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, 'dist'),
        // publicPath: "/"
    },
    optimization: {
        moduleIds: 'hashed',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                }
            }
        },
        runtimeChunk: 'single'
    }
}