import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

// app config
const app = express()
const port = process.env.PORT || 8002

// middlewares
app.use(express.json())
app.use(cors())

// db config
const mongoURI =
  'mongodb+srv://admin:samsara@cluster0.ehjpd.mongodb.net/discordDB?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))
