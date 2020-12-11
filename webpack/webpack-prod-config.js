const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { srcPath } = require("./paths");
const paths = require("./paths");

const config = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name][id].[contenthash].css",
      chunkFilename: "[name][id].[contenthash].css",
    }),
  ],
};

module.exports = config;
