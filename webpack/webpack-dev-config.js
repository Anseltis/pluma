const { DefinePlugin } = require("webpack");

const { dir } = require("./paths");

const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"],
        include: dir,
      },
    ],
  },
};

module.exports = config;
