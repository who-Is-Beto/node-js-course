const Model = require('./model');

//mongodb+srv://db_user:<password>@cluster0.1ys2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority



function addMessage(message) {
  //list.push(message)
  const myMessage = new Model(message)
  myMessage.save()

}

async function getMessages(filterUser) {
  let filter = {}

  if (filterUser !== null) {
    filter = {
      user: filterUser
    }
  }
  const messages = await Model.find(filter)
  return messages

}

function removeMessages(id) {
  return Model.deleteOne({
    _id: id
  })
}

const updateText = async (id, message) => {
  const requestedMessage = await Model.findById(id)
  requestedMessage.message = message;
  const messageUpdated = await requestedMessage.save();
  return messageUpdated;
}
module.exports = {
  list: getMessages,
  add: addMessage,
  updateText: updateText,
  remove: removeMessages
}