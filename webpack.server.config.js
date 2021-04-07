const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getRules = require('./webpack/rules');

const config = (variables) => {
  const { devtool, mode, watch } = variables;

  return {
    devtool,
    mode,
    watch,
    entry: {
      server: path.join(__dirname, 'src', 'server', 'server.js')
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist', 'server')
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src')
      },
      extensions: ['.js', '.json', '.jsx'],
      modules: ['node_modules']
    },
    module: {
      rules: getRules()
    },
    target: 'node',
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/dev-server', /\.(?!(?:jsx?|json)$).{1,5}$/i]
      })
    ]
  };
};

module.exports = config;
