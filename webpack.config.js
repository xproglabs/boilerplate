var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: {
    index: [
        "./js/index.js"
    ]
  },
  // contentBase:"./",
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'src/app/index.tpl.html',
    //   inject: 'body',
    //   filename: 'index.html'
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
],
  loaders: [
      {
            test: /\.jsx$/,
            // "include" is commonly used to match the directories
            include: [
                path.resolve(__dirname, "app/src"),
                path.resolve(__dirname, "app/test")
            ],

            // "exclude" should be used to exclude exceptions
            // try to prefer "include" when possible

            // the "loader"
            loader: "babel-loader",
            // presets: ["react", "react-hmre", "es2015", "stage-0"]
            query: {"presets": ["es2015", "stage-0"]}
      }
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/assets",
    // name comes from entry:index
    filename: "[name].bundle.js"
  }
};
