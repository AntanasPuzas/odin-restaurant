const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "eval",
    devServer: {
        static: "./dist",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant",
        }),
    ],
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(svg|img|jpg|jpeg|gif|png)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"], 
            },
            {
                test: /\.xml$/i,
                use: ["xml-loader"],
            },
        ],
    },
    optimization: {
        runtimeChunk: "single",
    },
}