const path = require("path");

const src = "src";
const dist = "build";
const dir = __dirname;

module.exports = {
  ...{ src, dist, dir },
  srcPath: path.join(dir, src),
  distPath: path.join(dir, dist),
};
