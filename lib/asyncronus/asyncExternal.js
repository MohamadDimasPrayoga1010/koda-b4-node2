const moment = require('moment')

async function convertDataEksternal(tanggal){

  return await new Promise((resolve, reject) => {
    try {
       const masukTanggal = moment(tanggal, "MM-DD-YYYY", true)

      if (masukTanggal.isValid()) {
        const result = masukTanggal.format("MM/DD/YYYY")
        console.log(result)
        resolve(result)
      } else {
        reject("Inputan harus angka")
      }
    } catch (err) {
      reject("eror : ", err)
    }
  })
}

module.exports = {
  convertDataEksternal
}