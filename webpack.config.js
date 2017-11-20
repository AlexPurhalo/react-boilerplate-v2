const webpack = require("webpack");
require('dotenv').config();

module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', "es2015", "stage-1"]
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			process: {
				env: {
					NODE_ENV: `'${process.env.NODE_ENV}'`,
					ENDPOINT_ADDRESS: `'${process.env.ENDPOINT_ADDRESS}'`
				}
			}
		})
	]
	
};
