require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT || 6000

const userRoutes = require('./src/routes/users')

const middlewareLogRequest = require('./src/middleware/logs')


const app = express()

app.use(middlewareLogRequest)

app.use(express.json())

app.use('/users', userRoutes)


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`)
})