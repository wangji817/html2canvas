/*
	作者:night
	时间:2017-04-28
*/
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server',path.resolve(__dirname, './src/index.js')
    ],
    output: {    	
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
		hotUpdateChunkFilename: 'hot/hot-update.js',
		hotUpdateMainFilename: 'hot/hot-update.json'
    },
	devServer: {
        disableHostCheck: true,
        port: 8989,
        //解决跨域
        proxy: {
          '/api': {
            target: 'http://xxx.xxx.xxx/xxx.json',
            pathRewrite: {'^/api':''},
            changeOrigin: true,
            secure: false // 接受 运行在 https 上的服务
          }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx|\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.scss$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};