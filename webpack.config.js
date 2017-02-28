//一个常见的Webpack配置文件
var webpack = require('webpack');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map', //配置生成Source
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        publicPath: 'http://localhost:8080',
        filename: "[name].js"
    },

    module: {
        loaders: [{
            //处理json的loader
            test: /\.json$/,
            loader: "json-loader"
        }, {
            //处理js的loader
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader', //在webpack的module部分的loaders里进行配置即可
        }, {
            //处理css的loader
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }]
    },

    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: '8080',
        hot: true,
        colors: true, //终端输出结果为彩色。
        //在开发单页面应用时用处比较大。
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    }

    // module: {
    //   loaders: [
    //     {
    //       test: /\.json$/,
    //       loader: "json"
    //     },
    //     {
    //       test: /\.js$/,
    //       exclude: /node_modules/,
    //       loader: 'babel'
    //     },
    //     {
    //       test: /\.css$/,
    //       loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
    //     }
    //   ]
    // },
    // postcss: [
    //   require('autoprefixer')
    // ],


    // plugins: [
    // new webpack.HotModuleReplacementPlugin()//热加载插件
    //   new HtmlWebpackPlugin({
    //     template: __dirname + "/app/index.tmpl.html"
    //   }),
    //   new webpack.optimize.OccurenceOrderPlugin(),
    //   new webpack.optimize.UglifyJsPlugin(),
    //   new ExtractTextPlugin("[name]-[hash].css")
    // ]
}