module.exports = {
    entry: __dirname + '/src/index.jsx',
    output: {
        path: __dirname + '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: __dirname + '/src',
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};