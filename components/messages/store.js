const list = []

function addMessage(message) {
  list.push(message)
}

function getMessages() {
  return list
}

module.exports = {
  list: getMessages,
  add: addMessage
}