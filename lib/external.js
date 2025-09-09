const moment = require('moment')

const convertDateExternal = (tanggal) => {
  const masukTanggal = moment(tanggal, "MM-DD-YYYY", true);

  if (masukTanggal.isValid()) {
    console.log(masukTanggal.format("MM/DD/YYYY"));
  } else {
    console.log("inputan harus berupa angka")
  };
};

module.exports ={
  convertDateExternal
}
