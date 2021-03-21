const message = require('../components/messages/network')
const user = require('../components/user/network')

const rutes = (server) => {
  server.use('/messages', message)
  server.use('/users', user)
}

module.exports = rutes