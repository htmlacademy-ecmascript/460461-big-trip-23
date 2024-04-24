const path = require('path');
const CopyFile = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new CopyFile({
            patterns: [{ from: 'public' }],
        })
    ],
};
