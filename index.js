const fs = require('fs')
const peg = require('pegjs')

const grammar = fs.readFileSync('./peg', 'utf8')
const input = fs.readFileSync('./input', 'utf8')

const parser = peg.generate(grammar)
const result = parser.parse(input)

console.log('Result:\n', JSON.stringify(result, null, 2))
