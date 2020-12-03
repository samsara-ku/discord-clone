import express from 'express'
import mongoose from 'mongoose'

// app config
const app = express()
const port = process.env.PORT || 8002

// middlewares

// db config

// api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))
