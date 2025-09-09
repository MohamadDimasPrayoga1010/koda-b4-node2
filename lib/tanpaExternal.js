const tanpaEksternal = (date) => {
  const [tanggal, bulan, tahun] = date.split("-");
  date = new Date(date);
  if (!isNaN(date)) {
    console.log(`${tanggal}/${bulan}/${tahun}`);
  } else {
    console.log("Input Harus Angka");
  }
};

// const tanpaEksternal2 = (date) => {
//   return new Promise((resolve, reject) => {
//     const [tanggal, bulan, tahun] = date.split("-");
//     date = new Date(date);
//     if (isNaN(date)) {
//       resolve(`${tanggal}/${bulan}/${tahun}`);
//     } else {
//       reject("Input Harus Angka");
//     }
//   });
// };

module.exports = {
  tanpaEksternal
};
