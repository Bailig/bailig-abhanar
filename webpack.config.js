var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: 'assets/'
    },
    devServer: {
        contentBase: 'dist',
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-1', 'react']
                }
            }
        }, 
        { test: /\.css$/, use: ["style-loader", "css-loader"] },
        { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
        { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
        { test: /\.jpg$/, use: 'file-loader'},
        { test: /\.(ttf|eot)$/, loader: 'file-loader' },
        { test: /\.(woff2?|svg)$/, loader: 'url-loader?limit=10000' },
        { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports-loader?jQuery=jquery' }
        ]
    }
};