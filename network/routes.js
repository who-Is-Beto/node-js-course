const message = require('../components/messages/network')

const rutes = (server) => {
  server.use('/messages', message)
}

module.exports = rutes