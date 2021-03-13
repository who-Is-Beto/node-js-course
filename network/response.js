exports.success = (req, res, message, status) => {
  res.status(status || 501).send({
    error: '',
    body: message
  })
}

exports.error = (req, res, message, status, details) => {
  console.error(details)


  res.status(status || 500).send({
    error: message,
    body: ''
  })

}