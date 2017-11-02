var http = require('http')
var request = http.request({
  hostname: 'localhost',
  port: 8000,
  method: 'POST'
}, function (res) {
  res.on('data', function (chunk) {
    process.stdout.write(chunk.toString())
  })
})
request.end('Hello Server')
