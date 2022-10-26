const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { getThemeVariables } = require('antd/dist/theme');
const aliyunTheme = require('@ant-design/aliyun-theme');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./dist"),
        publicPath: '/'
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
                                modifyVars:  aliyunTheme//getThemeVariables({ dark: true, compact: true }),
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
                        loader: "file-loader",
                        options: {
                            name: '[path][name].[ext]'
                        }
                    },
                ]
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        port: 8081,
        proxy: {
            '/api': {
                target: "http://localhost:8080/",
                changeOrigin: true,
                bypass: function (req, res, proxyOptions) {
                    if (req.headers.accept.indexOf('html') != -1) {
                        console.log(req.originalUrl);

                        return req.originalUrl;
                    }
                },
                pathRewrite: { '^/api': '' },
                autoRewrite: true
            }
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            favicon: './public/icons/pikachu.png'
        })
    ]
}