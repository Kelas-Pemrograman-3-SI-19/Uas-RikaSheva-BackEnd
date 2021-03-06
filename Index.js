const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoURL = 'mongodb://localhost:27017/pendaftaranwarga'
mongoose.connect(mongoURL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Berhasil konek ke database')
}).catch((err) => {
  console.log('gagal konek ke database')
})

app.use(cors())

app.use(bodyParser.json({
  extended: true,
  limit: '20mb'
}))
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '20mb'
}))

// list router
app.use('/user', require('./routes/User'))
app.use('/warga', require('./routes/Warga'))

app.listen(3000, function () {
  console.log('Server telah dijalankan')
})