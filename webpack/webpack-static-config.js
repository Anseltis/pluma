const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  plugins: [new CaseSensitivePathsPlugin(), new CleanWebpackPlugin()],
};

module.exports = config;
