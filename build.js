// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const webpack = require('webpack');
const { existsSync } = require('fs');
const path = require('path');
const clientConfig = require('./webpack.client.config.js');
const serverConfig = require('./webpack.server.config.js');

const getVariables = () => {
	const { IS_DEPLOYED } = process.env;
	if (!IS_DEPLOYED) require('dotenv').config();
	const APP_VERSION = process.env.APP_VERSION || process.env.npm_package_version;
	const NODE_ENV = process.env.NODE_ENV || 'development';
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

const cb = (error, stats, watch, isServer) => {
	if (error) console.error(`error: ${error}`.red);

	const buildType = isServer ? 'backend' : 'frontend';

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

	if (watch) {
		console.log(`Webpack is watching ${buildType}.`.brightMagenta);
	} else {
		console.log(`Webpack has built ${buildType}.`.brightMagenta);
	}
};

const build = (variables) => {
	console.log('Starting build'.cyan);
	const { watch } = variables;

	return Promise.all([
		webpack(clientConfig(variables), (error, stats) => cb(error, stats, watch, false)),
		webpack(serverConfig(variables), (error, stats) => cb(error, stats, watch, true))
	]).catch((err) => {
		console.log(`Error in build: ${err}`.brightMagenta);
	});
};

const prebuild = (build, variables, variablesWatch) => {
	console.log('Prebuilding frontend to build manifest.'.cyan);
	webpack(clientConfig(variables)).run((error, stats1) => {
		if (error) console.error('error:', error);

		return build(variablesWatch);
	});
};

const startBuild = () => {
	const manifestExists = existsSync(path.join('dist', 'client', 'assets-manifest.json'));
	const { variables, variablesWatch } = getVariables();

	if (manifestExists) {
		console.log('manifest.json found.'.cyan);
		return build(variablesWatch);
	} else {
		console.log('manifest.json not found.'.cyan);
		return prebuild(build, variables, variablesWatch);
	}
};

startBuild();
