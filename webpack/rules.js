const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelServerConfigFile = path.join(__dirname, '..', 'babel.server.config.json');
const babelClientConfigFile = path.join(__dirname, '..', 'babel.config.json');

const jsRule = ({ isServer }) => {
	const configFile = isServer ? babelServerConfigFile : babelClientConfigFile;

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

const jsxRule = ({ isServer }) => {
	const configFile = isServer ? babelServerConfigFile : babelClientConfigFile;

	return {
		test: /\.(jsx)$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				options: { configFile }
			}
		]
	};
};

const styleRule = ({ isServer }) => ({
	test: /\.(sa|sc|c)ss$/,
	exclude: /node_modules/,
	use: [
		!isServer && MiniCssExtractPlugin.loader,
		'css-loader',
		'postcss-loader',
		'sass-loader'
	].filter(Boolean)
});

module.exports = (options = {}) => [jsRule(options), jsxRule(options), styleRule(options)];
