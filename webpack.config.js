var Webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    plugins: [
        new Webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ],
    output: {
        path: path.resolve(__dirname, ''),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, ''),
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                include: path.resolve(__dirname, ''),
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                include: path.resolve(__dirname, ''),
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                include: path.resolve(__dirname, ''),
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                include: path.resolve(__dirname, ''),
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                include: path.resolve(__dirname, ''),
                loader: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                include: path.resolve(__dirname, ''),
                loader: 'url?limit=10000&mimetype=image/svg+xml'
            }
        ]
    }
};
