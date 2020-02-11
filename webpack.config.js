const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/js/main.js',
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
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    module: {
        rules: [{
            // Para utilizar css de la siguiente manera
            test: /\.css$/,
            use: [
                { loader: MiniCssExtractPlugin.loader },
                { loader: "style-loader" },
            ],
            /* use: [
                // Este metodo se usa para importar el archivo de estilos desde el js
                {loader: "style-loader"},
                // Este metodo se usa para que de como resultado un archivo css
                { loader: MiniCssExtractPlugin.loader },
                // Para utilizar css de la siguiente manera
                { loader: "css-loader" },
            ] */
        }]
    }
}