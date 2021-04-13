const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

/**
 * @function getPlugins
 * @param {Boolean} [isServer]
 * @returns {Function}
 */
module.exports = (isServer, { APP_VERSION, NODE_ENV, isProd }) => {
	const definePluginBase = {
		'process.env.APP_VERSION': JSON.stringify(APP_VERSION)
		// 'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
	};

	return [
		new WebpackAssetsManifest({
			entrypoints: true,
			publicPath: true,
			writeToDisk: true
		}),
		isServer && new webpack.DefinePlugin(definePluginBase),
		!isServer &&
			new webpack.DefinePlugin({
				...definePluginBase,
				'process.env.foo': 'bar'
			}),
		new CleanWebpackPlugin()
	].filter(Boolean);
};
