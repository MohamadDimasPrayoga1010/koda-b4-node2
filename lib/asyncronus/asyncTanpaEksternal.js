const tanpaEksternal = async (date) => {
  return await new Promise((resolve, rejects) => {
    try {
      const [tanggal, bulan, tahun] = date.split("-")
      const dateInput = new Date(date)
      if (!isNaN(dateInput)) {
        const result = `${tanggal}/${bulan}/${tahun}`
        console.log(result)
        resolve(result)
      } else {
        const errInput = new Error(
          "Inputan Harus Angka dengan format yang sesuai"
        )
        rejects(errInput)
      }
    } catch (err) {0
      throw err.errInput


    }
  })
}


module.exports = {
 tanpaEksternal,
}
