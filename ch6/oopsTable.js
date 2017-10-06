let MOUNTAINS = require('./data.js')

function TextCell (text) {
  this.text = text
}

function UnderlinedCell(inner) {
  this.inner = inner
}


function dataTable (data) {
  let keys = Object.keys(data[0])
  console.log(keys)
  let header = keys.map((key) => new UnderlinedCell( new TextCell(key)))
  console.log(header)
  let body = data.map((rows) => {
    return keys.map((key) => (new TextCell( String(rows[key]))))
  })
  console.log(JSON.stringify(body))
  return body
  }

dataTable(MOUNTAINS)


