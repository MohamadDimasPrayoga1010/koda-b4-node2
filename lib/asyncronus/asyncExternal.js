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
         const errInput = new Error(
           "Inputan Harus Angka dengan format yang sesuai"
         )
        reject(errInput)
      }
    } catch (err) {
      reject(err.errInput)
    }
  })
}

module.exports = {
  convertDataEksternal
}