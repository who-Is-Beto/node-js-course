const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch((error) => {
      response.error(req, res, 'Unexpected error', 500, error)
    })
})

router.post('/', (req, res) => {

  controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201)
    })
    .catch(() => {
      response.error(req, res, 'Invalid information', 400, 'Error in user or message please check it and try again ):')
    })
})

module.exports = router