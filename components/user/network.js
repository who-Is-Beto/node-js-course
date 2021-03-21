const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.post('/', (req, res) => {
  controller.addUser(req.body.name)
    .then((data) => {
      response.success(req, res, data, 201)
    })
    .catch((error) => {
      response.error(req, res, data, 'Internal error', 500, error)
    })
})

router.get('/', (req, res) => {
  controller.getUsers()
    .then((userList) => {
      response.success(req, res, userList, 200)
    })
    .catch((error) => {
      response.error(req, res, 'Internal error', 500, error)
    })
})

module.exports = router