const express = require('express')
const bodyParser = require('body-parser')
/* const router = require('./components/messages/network') */
const router = require('./network/routes')

let app = express()
app.use(bodyParser.json())
//app.use(router)

router(app)

app.use('/app', express.static('public'))

app.listen(3000)
console.log('the app is listening in http://localhost:3000')