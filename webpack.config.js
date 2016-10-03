var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            include: path.resolve(__dirname, ''),
            loader: "style-loader!css-loader"
        }, {
            test: /\.(png|jpg)$/,
            include: path.resolve(__dirname, ''),
            loader: 'file?name=images/[name].[ext]'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=fonts/[name].[ext]'
        }]
    }
};