const path = require('path');

const babelConfigFile = path.join(__dirname, '..', 'babel.config.json');

const jsRule = () => {
  const configFile = babelConfigFile;

  return {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: { configFile }
      }
    ]
  };
};

module.exports = () => [jsRule()];
