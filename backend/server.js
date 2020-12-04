import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import mongoData from './mongoData.js'

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

app.post('/new/channel', (req, res) => {
  const dbData = req.body

  console.log(dbData)

  mongoData.create(dbData, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

app.get('/get/channelList', (req, res) => {
  mongoData.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      let channels = []

      data.map((channelData) => {
        const channelInfo = {
          id: channelData._id,
          name: channelData.channelName,
        }
        channels.push(channelInfo)
      })

      res.status(200).send(channels)
    }
  })
})

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))
