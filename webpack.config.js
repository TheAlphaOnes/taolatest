// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.mdx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react'],
              },
            },
            '@mdx-js/loader',
          ],
        },
        // Add other loaders here if necessary
      ],
    },
  };
  