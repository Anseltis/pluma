const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");

module.exports = {
  output: {
    filename: "[name].[contenthash].js",
    path: paths.distPath,
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My project",
      template: "./index.html"
    }),
  ],
};
