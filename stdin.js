const Mikan = require('mikan.js')

process.stdin.setEncoding('utf-8')
process.stdin.on('data', function (data) {
  console.log(Mikan(data))
})
