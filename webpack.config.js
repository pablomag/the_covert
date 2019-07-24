const path = require('path');

const devMode = 'production';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports =
[{
	mode: devMode,
	entry:
	[
		"./src/resources/js/main.js",
		"./src/resources/sass/main.scss"
	],
	output:
	{
		path: path.resolve(__dirname, "./"),
		filename: "./src/main.js"
	},
	optimization:
	{
		minimizer: [ new OptimizeCSSAssetsPlugin({}) ],
	},
	plugins:
	[
		new MiniCssExtractPlugin
		({
			filename: "./src/index.css"
		})
	],
	module:
	{
		rules:
		[{
			test: /\.(sa|sc|c)ss$/,
			use:
			[
				MiniCssExtractPlugin.loader,
				"css-loader",
				"sass-loader",
				"postcss-loader"
			]
		}]
	}
}];
