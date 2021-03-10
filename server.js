const express = require('express')

const app = express()

app.use('/', (request, response) => {
  response.send('Hola')
})

app.listen(8080)
console.log('the app is listening in http://localhost:8080')