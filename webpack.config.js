const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');
const glob = require('glob');

function getEntries(pattern) {
    const entries = {};

    glob.sync(pattern).forEach((file) => {
        entries[file.replace('src/', '')] = path.join(__dirname, file);
    });

    return entries;
}

module.exports = {
    entry: getEntries('src/**/*.ts*'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
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
