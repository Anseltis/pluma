const paths = require("./paths");

module.exports = {
  context: paths.srcPath,
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  entry: "./index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"],
      },
      {
        test: /\.(ttf|eot|woff|gif|png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
