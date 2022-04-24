const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	port: process.env.PORT || 5000,
	salt: process.env.SALT || 111222333444555666777888999000,
	DB: {
		uri: process.env.MONGOO_URI || 'MONGOO_URI=mongodb+srv://thanh:w1zqVPs5UfWnFJVK@cluster0.ci2u2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	},
}