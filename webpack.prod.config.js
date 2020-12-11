const { merge } = require('webpack-merge');

const baseConfig = require('./webpack/webpack-config');
const appConfig = require('./webpack/webpack-app-config');
const staticConfig = require('./webpack/webpack-static-config');
const prodConfig = require('./webpack/webpack-prod-config');

const config = merge(baseConfig, appConfig, staticConfig, prodConfig);

module.exports = config;
