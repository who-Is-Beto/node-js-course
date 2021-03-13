const express = require('express')
const response = require('../../network/response')
const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.headers)
  res.header({
    "custom-property": "custom value"
  })
  //res.send('Message list')

  response.success(req, res, 'Lista de mensajes', 200)
  /* console.log(req.headers) */
})

router.post('/', (req, res) => {

  if (req.query.error == 'ok') {
    response.error(req, res, 'Internal Server Error', 500, 'Error simulado')
  } else {
    response.success(req, res, 'Message created', 201)
  }
})

module.exports = router