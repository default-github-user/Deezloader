const PORT = process.env.PORT || 80;
console.log('Heroku allowed port:' + PORT);

var config = {
	port: PORT,
	version: 203,
	sys: 'win'
}

module.exports = config;
