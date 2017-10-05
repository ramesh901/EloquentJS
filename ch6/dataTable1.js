let MOUNTAINS = require('./data.js')

function UnderlinedCell (inner) {
  this.inner = inner
}

function TextCell (text) {
  this.text = text.split('\n')
}

function dataTable (data) {
  var keys = Object.keys(data[0])
  console.log('keys are', keys)
  var headers = keys.map(function (name) {
    return new UnderlinedCell(new TextCell(name))
  })
  var body = data.map(function (row) {
    return keys.map(function (name) {
      return new TextCell(String(row[name]))
    })
  })
  return [headers].concat(body)
    // To see the actual values in the console change the return type as follows:
    // return [headers].concat(JSON.stringify(body));
}

console.log((dataTable(MOUNTAINS)))
