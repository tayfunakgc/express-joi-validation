const http = require('http')
const express = require('express')
const createHttpError = require('http-errors')

const app = express()
const httpServer = http.createServer(app)

//* Routes
const authRouter = require('./routes/auth')
const postRouter = require('./routes/post')

//* Application Level Middlewares
app.use(express.json())

//* Bind Routes
app.use('/auth', authRouter)
app.use('/posts', postRouter)

//* Catch HTTP 404 
app.use((req, res, next) => {
    next(createHttpError(404));
})

//* Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
});

const PORT = process.env.PORT || 3000
httpServer.listen(3000, () => console.log(`app listening at http://localhost:${PORT}`))
