const { merge } = require('webpack-merge');

const baseConfig = require('./webpack/webpack-config');
const appConfig = require('./webpack/webpack-app-config');
const devConfig = require('./webpack/webpack-dev-config');
const devServerConfig = require('./webpack/webpack-dev-server-config');

const config = merge(baseConfig, appConfig, devConfig, devServerConfig);

module.exports = config;
