'use strict';

const VueLoaderPlugin      = require('vue-loader/lib/plugin');
const HtmlPlugin           = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const path                 = require('path');
const isDev                = process.env.NODE_ENV === 'development';

const envConfig = require('dotenv').config();
if (envConfig.error || !envConfig.parsed.MAPS_API_KEY) {
    throw 'The Google Maps API key must be provided through a .env file to build/start the app';
}

const webpackConfig = {
    entry: {
        index: path.resolve(__dirname, '..', 'src', 'main'),
		'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
		'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
		'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
		'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
		'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker',
    },
    resolve: {
        extensions: [ '.js', '.vue', '.worker' ],
        alias: {
            'vue$': isDev ? 'vue/dist/vue.runtime.js' : 'vue/dist/vue.runtime.min.js',
            '@': path.resolve(__dirname, '..', 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: [ path.resolve(__dirname, '..', 'src') ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [ path.resolve(__dirname, '..', 'src') ]
            },
            {
                test: /\.css$/,
                use: [
                    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 100000,
                },
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery!expose-loader?$'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({ template: 'index.html' /*, chunksSortMode: 'dependency' */ }),
        new CopyWebpackPlugin([
            {
              from: path.resolve(__dirname, '..', 'assets'),
              to: path.resolve(__dirname, '..', 'dist')
            }
        ])
    ]
};

module.exports = webpackConfig;
