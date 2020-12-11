const { merge } = require('webpack-merge');

const baseConfig = require('./webpack/webpack-config');
const appConfig = require('./webpack/webpack-app-config');
const devConfig = require('./webpack/webpack-dev-config');
const staticConfig = require('./webpack/webpack-static-config');

const config = merge(baseConfig, appConfig, devConfig, staticConfig);

module.exports = config;
