var webpack = require('webpack')
var path = require('path')
var fs = require('fs')

const nodeExternals = require('webpack-node-externals')

module.exports = {
	target: "node",
	mode: 'development',
	externals: [nodeExternals()],
	entry: "./server.js",
	output: {
		filename: "server.bundle.js",
		path: path.join(__dirname)
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env", "stage-0"]
					}
				}
			}
		]
	}
}