const path = require('path');
const nodeExternals = require('webpack-node-externals');
const getRules = require('./webpack/rules');
const getPlugins = require('./webpack/plugins');
const getOptimization = require('./webpack/optimization');

const isServer = true;
const optimization = getOptimization({ isServer: true });

/**
 * @function serverConfig
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
			rules: getRules({ isServer })
		},
		plugins: getPlugins(isServer, variables),
		optimization,
		target: 'node',
		externals: [
			nodeExternals({
				allowlist: ['webpack/hot/dev-server', /\.(?!(?:jsx?|json)$).{1,5}$/i]
			})
		],
		watchOptions: {
			ignored: /node_modules/
		}
	};
};
