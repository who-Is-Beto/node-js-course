const db = require('mongoose')
const Model = require('./model');

//mongodb+srv://db_user:<password>@cluster0.1ys2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

db.Promise = global.Promise;

db.connect('mongodb://db_user:ZH62c9WhfCfkr5v@cluster0-shard-00-00.1ys2v.mongodb.net:27017,cluster0-shard-00-01.1ys2v.mongodb.net:27017,cluster0-shard-00-02.1ys2v.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-123kjs-shard-0&authSource=admin&retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] conected!'))
  .catch(err => console.error('[db] error', err));

function addMessage(message) {
  //list.push(message)
  const myMessage = new Model(message)
  myMessage.save()

}

async function getMessages() {
  //return list
  const messages = await Model.find()
  return messages

}

module.exports = {
  list: getMessages,
  add: addMessage
}