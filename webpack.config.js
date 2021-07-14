const PurgecssPlugin = require('purgecss-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const path = require('path');
const glob = require('glob');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css']
    },
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react',
            umd: 'react',
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom',
            umd: 'react-dom',
        },
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    // Extracts css to a file
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader'
                ],
            },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: '[id].css',
        }),
        new PurgecssPlugin({
            paths: glob.sync(
                './src/**/*',
                {
                    nodir: true,
                }
            ),
            safelist: {
                greedy: [/--[\w\-]*$/]
            }
        }),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
};
