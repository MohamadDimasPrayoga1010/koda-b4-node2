const moment = require('moment')

const convertDateExternal = (tanggal) => {
  const masukTanggal = moment(tanggal, "MM-DD-YYYY", true)

  if (masukTanggal.isValid()) {
    console.log(masukTanggal.format("MM/DD/YYYY"))
  } else {
    const err = new Error("Inputan Harus Angka dengan format yang sesuai")
    throw err
  };
}

module.exports ={
  convertDateExternal
}
