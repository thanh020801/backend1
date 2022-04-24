const userRouter = require('./user.router')
const adminRouter = require('./admin.router')


function router(app){
	app.use('/admin', adminRouter)
	app.use('/', userRouter)
	
}
module.exports = router
// PORT=5000
// MONGOO_URI=mongodb+srv://thanh:w1zqVPs5UfWnFJVK@cluster0.ci2u2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// SALT=111222333444555666777888999000
// JWT_ACCEPT_KEY=000111222333
// JWT_REFRESH_KEY=999888777666