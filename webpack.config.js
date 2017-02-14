module.exports = {
  entry: "./frontend/care_bnb.jsx",
  output: {
    path: './app/assets/javascripts',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
