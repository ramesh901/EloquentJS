/* In this part-2 series we find the width and height */

let MOUNTAINS = require('./data.js')

function UnderlinedCell (inner) {
  this.inner = inner
}

UnderlinedCell.prototype.minWidth = function () {
  return this.inner.minWidth()
}

UnderlinedCell.prototype.minHeight = function () {
  return this.inner.minHeight() + 1
}

function TextCell (text) {
  this.text = text.split('\n')
}

TextCell.prototype.minHeight = function () {
  return this.text.length // return Array length
}

TextCell.prototype.minWidth = function () {
    // Iterate over every line and check its length
    // against the current longest length
  return this.text[0].length
    // BOOK CODE
    /* return this.text.reduce((width, line) => {
    return Math.max(width, line.length)}, 0) */
}

// @params: rows:Array [[TextCell]]
const rowHeights = (rows) => {
  return rows.map((row) => {
        // row:Array [TextCell]
    return row.reduce((max, cell) => {
      return Math.max(max, cell.minHeight())
    }, 0)
  })
}

// @params: rows:Array [[TextCell]]
const colWidths = (rows) => {
    // Iterate over the columns of the first row
  return rows[0].map((_, i) => {
        // Array.reduce on rows (though we only need a column
        // count from the first row
    return rows.reduce((max, row) => {
            // row:Array [TextCell]
      return Math.max(max, row[i].minWidth())
    }, 0)
  })
}

const drawTable = (rows) => {
    // Create arrays of heights and widths for the rows/columns
  let heights = rowHeights(rows)
  let widths = colWidths(rows)
  console.log('Height is', heights)
  console.log('width is', widths)
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
  console.log('INPUT TO DRAW TABLE:', JSON.stringify([headers].concat(body)))
  return [headers].concat(body)
    // To see the actual values in the console change the return type as follows:
}

// dataTable(MOUNTAINS)
drawTable(dataTable(MOUNTAINS))
