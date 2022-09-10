const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { getThemeVariables } = require('antd/dist/theme');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./dist")
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                        plugins: [
                            ['import', { libraryName: "antd", style: true }]
                        ]
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: getThemeVariables({ dark: true })
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/, use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: "url-loader",
                    },
                    {
                        loader: "file-loader"
                    },
                    {
                        loader: '@svgr/webpack',
                        options: {
                            babel: false,
                            icon: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
}