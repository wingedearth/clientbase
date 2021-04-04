// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const webpack = require('webpack');
const serverConfig = require('./webpack.server.config.js');

const getVariables = () => {
  const { IS_DEPLOYED } = process.env;
  if (!IS_DEPLOYED) require('dotenv').config();
  const APP_VERSION = process.env.APP_VERSION || process.env.npm_package_version;
  const NODE_ENV = process.env.NODE_ENV || null;
  const isProd = NODE_ENV === 'production';
  const mode = isProd ? 'production' : 'development';
  const devtool = isProd ? 'source-map' : 'eval-cheap-module-source-map';
  const watch = !isProd;

  const variables = {
    APP_VERSION,
    devtool,
    isProd,
    mode,
    NODE_ENV
  };

  const variablesWatch = {
    ...variables,
    watch
  };

  return { variables, variablesWatch };
};

const cb = (error, stats) => {
  if (error) console.error('error:', error);

  console.log(
    stats.toString({
      assets: false,
      chunks: false,
      colors: true,
      moduleAssets: false,
      modules: false,
      entrypoints: 'auto'
    })
  );

  console.log('Build complete'.brightMagenta);
};

const build = (variables) => {
  console.log('Starting build'.cyan);
  return webpack(serverConfig(variables), cb);
};

const startBuild = () => {
  const { variables, variablesWatch } = getVariables();
  return build(variablesWatch);
};

startBuild();
