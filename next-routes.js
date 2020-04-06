const routes = require('next-routes')

module.exports = routes().
	add("", "/", "index").
	add("drive", "drive/:uri", "drive")