const routes = require('next-routes')

module.exports = routes().
	add("", "/", "index").
	add("drive", "/d/:uri", "drive")