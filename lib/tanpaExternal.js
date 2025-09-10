const tanpaEksternal = (date) => {
  const [tanggal, bulan, tahun] = date.split("-")
  date = new Date(date)
  if (!isNaN(date)) {
    console.log(`${tanggal}/${bulan}/${tahun}`)
  } else {
    console.log("Input Harus Angka")
  }
}



module.exports = {
  tanpaEksternal,
}
