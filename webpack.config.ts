import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import 'webpack-dev-server'

const mode = 'development'

const config: webpack.Configuration = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	mode,
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ],
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
		open: true
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new webpack.ProgressPlugin(),
	],
}

export default config