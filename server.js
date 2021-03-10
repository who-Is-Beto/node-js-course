const express = require('express')
const router = express.Router()

let app = express()

app.use(router)

router.get('/messages', (req, res) => {
  res.send('Message list')
})

router.post('/messages', (req, res) => {
  res.send('Message added')
})

/* 
app.use('/', (request, response) => {
  response.send('Hola')
}) */

app.listen(3000)
console.log('the app is listening in http://localhost:3000')