module.exports = {
	env: {
		commonjs: true,
		browser: true,
		es6: true,
		node: true
	},
	extends: ['plugin:react/recommended', 'standard', 'prettier'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			modules: true,
			jsx: true
		},
		ecmaVersion: 2021,
		sourceType: 'module'
	},
	plugins: ['import', 'prettier', 'react'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				printWidth: 120,
				trailingComma: 'none',
				useTabs: true
			}
		],
		'comma-dangle': ['error', 'never'],
		'consistent-return': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-filename-extension': 0,
		'react/require-default-props': 0,
		'global-require': 0,
		'import/no-extraneous-dependencies': 0,
		'no-console': 0,
		'no-unused-vars': 1
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
