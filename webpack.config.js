const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        main: "./src/lib/index.ts"
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    devtool: "source-map",
    devServer: {
        watchContentBase: true,
        overlay: true
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.ts$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                        plugins: [
                            [
                                "@babel/plugin-proposal-class-properties"
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-typescript"],
                        plugins: [
                            [
                                "@babel/plugin-proposal-class-properties"
                            ]
                        ]
                    }
                }
            },

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}