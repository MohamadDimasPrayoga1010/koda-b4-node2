const readline = require("readline")
const convert = require("./lib/external")
const noConvert = require("./lib/tanpaExternal")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Masukkan Tanggal (DD-MM-YY) ", (tanggal) => {
  //   convert.convertDateExternal(tanggal)
  noConvert.tanpaEksternal(tanggal)

  rl.close()
})

