const CODES = {
  A: 65,
  Z: 90
}

function toChar (_, index) {
  return String.fromCharCode(CODES.A + index)
}

function toCell (cell) {
  return `<div class="cell" contenteditable>${cell}</div>`
}

function toColumn (col) {
  return `<div class="column">${col}</div>`
}

function createRow (rowNumber, content) {
  return `
    <div class="row">
      <div class="row-info">${rowNumber || ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}

export function createTable (rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('')
    
  const rows = []
  rows.push(createRow(null, cols))

  const cells = new Array(colsCount)
    .fill('')
    .map(toCell)
    .join('')

  for (let i = 0; i < rowsCount; i++) {
    const rowNumber = String(i + 1)
    rows.push(createRow(rowNumber, cells))
  }

  return rows.join('') 
}
