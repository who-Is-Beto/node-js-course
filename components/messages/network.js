const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', (req, res) => {
  const filterMessages = req.query.user || null
  controller.getMessages(filterMessages)
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

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;
  try {
    const data = await controller.updateMessage(id, message);
    response.success(req, res, data, 201);
  } catch (error) {
    console.log(error);
    response.error(req, res, "Error", 400, error)
  }
});
module.exports = router