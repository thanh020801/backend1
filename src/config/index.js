// const dotenv = require('dotenv')
// dotenv.config()

module.exports = {
	port: process.env.PORT || 5000,
	salt: '111222333444555666777888999000',
	JWT_ACCEPT_KEY: '000111222333',
	JWT_REFRESH_KEY: '999888777666',
	DB: {
		uri: process.env.MONGOO_URI || 'mongodb+srv://thanh:w1zqVPs5UfWnFJVK@cluster0.ci2u2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	},
}
// PORT=5000
// MONGOO_URI=mongodb+srv://thanh:w1zqVPs5UfWnFJVK@cluster0.ci2u2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// SALT=111222333444555666777888999000
// JWT_ACCEPT_KEY=000111222333
// JWT_REFRESH_KEY=999888777666