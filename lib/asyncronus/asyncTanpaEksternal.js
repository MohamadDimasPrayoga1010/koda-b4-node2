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
        rejects("Input Harus Angka")
      }
    } catch (err) {
      console.log(err)
    }
  })
}


module.exports = {
 tanpaEksternal,
}
