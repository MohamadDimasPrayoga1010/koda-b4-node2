const readline = require("readline")
const convert = require("./lib/external")
const noConvert = require("./lib/tanpaExternal")
const convert2 = require("./lib/asyncronus/asyncExternal")
const noConvert2 = require("./lib/asyncronus/asyncTanpaEksternal")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question("Masukkan Tanggal (DD-MM-YY) ", (tanggal) => {
    convert.convertDateExternal(tanggal)
  // noConvert.tanpaEksternal(tanggal)
  // convert2.convertDataEksternal(tanggal)
  // noConvert2.tanpaEksternal(tanggal)

  rl.close()
})

