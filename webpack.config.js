const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const svelteConfig = require('./svelte.config')

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: 'bundle.css',
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
            {
                test: /\.ts$/i,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test:  /\.(m?js|svelte)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'svelte-loader',
                        options: {
                            ...svelteConfig,
                            compilerOptions: {
                                dev: true,
                            },
                            hotReload: true,
                            hotOptions: {
                                noReload: true
                            },
                        },
                    }
                ]
            },
            {
                test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false
				},
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.svelte', '.scss'],
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        hot: true
        
    },
}
