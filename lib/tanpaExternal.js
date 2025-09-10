const tanpaEksternal = (date) => {
  const [tanggal, bulan, tahun] = date.split("-")
  date = new Date(date)
  if (!isNaN(date)) {
    console.log(`${tanggal}/${bulan}/${tahun}`)
  } else {
    const err = new Error("Inputan Harus Angka dengan format yang sesuai")
    throw err
  }
}



module.exports = {
  tanpaEksternal,
}
