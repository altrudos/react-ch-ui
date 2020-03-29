const webpack = require('webpack')
const withLess = require('@zeit/next-less')
module.exports = withLess({
	webpack(config, options){
		config.plugins.push(new webpack.DefinePlugin({
			"process.env.BASEURL": JSON.stringify(process.env.BASEURL),
		}))
		return config
	}
})
