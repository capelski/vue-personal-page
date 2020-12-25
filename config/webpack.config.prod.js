'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const commonConfig = require('./webpack.config.common');
const isProd = process.env.NODE_ENV === 'production';
const environment = require('./env/prod.env');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const blogEntries = require('../src/components/blog/entries/registry');
const prerenderRoutes = ['/', '/blog', '/projects' /*, '/trips'*/];
Object.values(blogEntries)
    .slice(-10) // Seems prerendering fails after a certain number of pre-rendered pages
    .forEach(entry => {
        entry.languages.forEach(language => {
            prerenderRoutes.push(`/blog/${entry.id}/${language}`);
        });
    });

console.log('Will prerender the following routes');
prerenderRoutes.forEach(route => console.log(`\t${route}`));

const webpackConfig = merge(commonConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'docs'),
        publicPath: '/',
        filename: 'js/[name].bundle.js',
        // Chunks optimization seem to break monaco editor
        // filename: 'js/[hash].js',
        // chunkFilename: 'js/[id].[hash].chunk.js',
        // Necessary for monaco editor
        globalObject: 'self'
    },
    optimization: {
        // runtimeChunk: 'single',
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }]
                }
            }),
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: !isProd
            })
        ]
        // splitChunks: {
        //     chunks: 'all',
        //     maxInitialRequests: Infinity,
        //     minSize: 0,
        //     cacheGroups: {
        //         vendor: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name (module) {
        //                 const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
        //                 return `npm.${packageName.replace('@', '')}`;
        //             }
        //         },
        //         styles: {
        //             test: /\.css$/,
        //             name: 'styles',
        //             chunks: 'all',
        //             enforce: true
        //         }
        //     }
        // }
    },
    plugins: [
        new webpack.EnvironmentPlugin(environment),
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
            // filename: 'css/[name].[hash].css',
            // chunkFilename: 'css/[id].[hash].css'
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp('\\.(js|css)$'),
            threshold: 10240,
            minRatio: 0.8
        }),
        // new webpack.HashedModuleIdsPlugin(),
        new PrerenderSpaPlugin({
            staticDir: path.join(__dirname, '..', 'docs'),
            routes: prerenderRoutes
        })
    ]
});

if (!isProd) {
    webpackConfig.devtool = 'source-map';

    if (process.env.npm_config_report) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
    }
}

module.exports = webpackConfig;
