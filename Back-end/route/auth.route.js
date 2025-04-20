const express = require("express")
const { Signup, Signin } = require("../controller/user.controller")
const userController = require("../controller/user.controller")
const AuthRouter = express.Router()


AuthRouter.post("/signup", userController.Signup)
AuthRouter.post("/signin", userController.Signin)
AuthRouter.post("/logout", userController.logout)


module.exports = AuthRouter