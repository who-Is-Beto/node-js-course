const mongooose = require('mongoose')

const Schema = mongooose.Schema

const mySchema = Schema({
  users: [{
    type: Schema.ObjectId,
    ref: 'user'
  }]
})

const model = mongooose.model('Chat', mySchema)

module.exports = model