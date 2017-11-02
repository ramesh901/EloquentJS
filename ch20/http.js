var http = require('http')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<h1>Hello</h1><p> you asked for <code>' + req.url + '</code></p>')
  res.end()
}).listen(8000)
