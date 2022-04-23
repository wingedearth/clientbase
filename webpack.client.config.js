const path = require('path');
const getRules = require('./webpack/rules');
const getPlugins = require('./webpack/plugins');
const getOptimization = require('./webpack/optimization');

const isServer = false;
const optimization = getOptimization({ isServer: true });

/**
 * @function clientConfig
 * @param {Object} variables
 * @returns {Object}
 */
module.exports = (variables) => {
	const { devtool, mode, watch } = variables;

	return {
		devtool,
		mode,
		watch,
		entry: {
			home: path.join(__dirname, 'src', 'entries/home.js')
		},
		output: {
			filename: 'js/[name].js',
			path: path.resolve(__dirname, 'dist', 'client')
		},
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src'),
				process: 'process/browser'
			},
			extensions: ['.js', '.json', '.jsx', 'css', 'sass', '.scss'],
			modules: ['node_modules']
		},
		module: {
			rules: getRules({ isServer })
		},
		plugins: getPlugins(isServer, variables),
		optimization,
		target: 'web',
		watchOptions: {
			ignored: /node_modules/
		}
	};
};
