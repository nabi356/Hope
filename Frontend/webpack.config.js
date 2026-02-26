const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './script/script.js',
    output: {
        filename: 'bundle.min.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    mangle: true, // Obfuscates variable names
                    compress: {
                        drop_console: true, // Removes console logs to hide debug tracing
                    },
                    output: {
                        comments: false, // Strips all comments
                    },
                },
                extractComments: false,
            }),
        ],
    },
};
