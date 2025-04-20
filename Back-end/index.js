const cookieParser = require("cookie-parser")
const express = require("express")
const AuthRouter = require("./route/auth.route")
const cors = require("cors")
const connect = require("./config/DB")
const BlogRouter = require("./route/blog.route")
const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(cookieParser())
app.use("/auth", AuthRouter)
app.use('/blog', BlogRouter)


app.listen(8080, async () => {
    try {
        await connect
        console.log("db connected")
        console.log("server is Started")
    } catch (error) {
        console.log(error)
    }
})



