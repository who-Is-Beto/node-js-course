const mongooose = require('mongoose')

const Schema = mongooose.Schema

const mySchema = Schema({
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  message: {
    type: String,
    required: true,

  },
  date: Date,
})

const model = mongooose.model('Messages', mySchema)

module.exports = model