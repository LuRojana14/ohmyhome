module: {
    loaders: [
        {
            test: /\.css$/,
            loader: 'style-loader'
        }, {
            test: /\.css$/,
            loader: 'css-loader',
            query: {
                modules: true,
                localIdentName: '[name]_[local]__[hash:base64:5]'
            }
        }
    ]
}