const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const serverOptimization = {
	nodeEnv: false
};
const clientOptimization = {
	splitChunks: {
		cacheGroups: {
			vendor: {
				chunks: 'all',
				minChunks: 3,
				test: /node_modules/,
				priority: 100
			},
			common: {
				chunks: 'all',
				minChunks: 3
			}
		}
	},
	minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
};

module.exports = (options = {}) => {
	const { isServer } = options;
	return isServer ? serverOptimization : clientOptimization;
};
