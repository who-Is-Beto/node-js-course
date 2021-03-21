const express = require('express')
const bodyParser = require('body-parser')
/* const router = require('./components/messages/network') */

const db = require('./db')
const router = require('./network/routes')

db('mongodb://db_user:ZH62c9WhfCfkr5v@cluster0-shard-00-00.1ys2v.mongodb.net:27017,cluster0-shard-00-01.1ys2v.mongodb.net:27017,cluster0-shard-00-02.1ys2v.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-123kjs-shard-0&authSource=admin&retryWrites=true&w=majority')

let app = express()
app.use(bodyParser.json())
//app.use(router)

router(app)

app.use('/app', express.static('public'))

app.listen(3000)
console.log('the app is listening in http://localhost:3000')