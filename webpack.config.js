const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css"]
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
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
            chunkFilename: '[id].css',
        }),
    ],
};
