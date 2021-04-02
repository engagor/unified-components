const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: "index.js"
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
