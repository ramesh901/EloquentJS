var http = require('http')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  req.on('data', function (chunk) {
    res.write(chunk.toString().toUpperCase())
  })
  req.on('end', function () {
    res.on('end')
  })
}).listen(8000)
