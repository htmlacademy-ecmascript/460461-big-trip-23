const path = require('path');
const CopyFile = require('copy-webpack-plugin');
const MakeHtml = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    plugins: [
        new MakeHtml({
            template: 'public/index.html',
        }),
        new CopyFile({
            patterns: [{
                from: 'public',
                globOptions: { ignore: ['**/index.html'] }
            }],
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            }
        ]
    }
};
