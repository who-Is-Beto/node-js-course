const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')
const router = express.Router()

let app = express()
app.use(bodyParser.json())
app.use(router)

router.get('/messages', (req, res) => {
  console.log(req.headers)
  res.header({
    "custom-property": "custom value"
  })
  //res.send('Message list')

  response.success(req, res, 'Lista de mensajes', 200)
  /* console.log(req.headers) */
})

router.post('/messages', (req, res) => {
  /*   console.log(req.body)
    console.log(req.query) */
  /* res.status(201).send({
    error: '',
    body: `${req.body} created`
  }) */

  if (req.query.error == 'ok') {
    response.error(req, res, 'Internal Server Error', 500, 'Error simulado')
  } else {
    response.success(req, res, 'Message created', 201)
  }
})

/* 
app.use('/', (request, response) => {
  response.send('Hola')
}) */

app.use('/app', express.static('public'))

app.listen(3000)
console.log('the app is listening in http://localhost:3000')