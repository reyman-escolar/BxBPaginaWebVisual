const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        // @babel/polyfill, para dar soporte a funciones modernas en navegadores antiguos. Por ejemplo Promise o Object.assign. 
        app: ['@babel/polyfill', './src/js/main.js'],
    },
    output: {
        path: __dirname + '/build',
        filename: 'js/bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'computadoras.html',
            template: './src/computadoras.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'sistemas.html',
            template: './src/sistemas.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'nosotros.html',
            template: './src/nosotros.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'servicio.html',
            template: './src/servicio.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
        ],
    },
};