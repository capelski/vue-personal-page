'use strict';

const webpack              = require('webpack');
const merge                = require('webpack-merge');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const path                 = require('path');
const commonConfig         = require('./webpack.config.common');
const environment          = require('./env/dev.env');

const webpackConfig = merge(commonConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        // Chunks optimization seem to break monaco editor
        // chunkFilename: 'js/[id].chunk.js',
        // Necessary for monaco editor
        globalObject: 'self'
    },
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsPlugin()
    ],
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 8000,
        stats: {
            normal: true
        }
    }
});

module.exports = webpackConfig;
