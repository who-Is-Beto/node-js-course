const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

let app = express()
app.use(bodyParser.json())
app.use(router)

router.get('/messages', (req, res) => {
  res.send('Message list')
})

router.post('/messages', (req, res) => {
  console.log(req.body)
  console.log(req.query)
  res.send(`message ${req.body.text} added`)
})

/* 
app.use('/', (request, response) => {
  response.send('Hola')
}) */

app.listen(3000)
console.log('the app is listening in http://localhost:3000')