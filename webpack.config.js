var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src/');

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    }
};