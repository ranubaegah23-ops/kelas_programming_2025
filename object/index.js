// let siswa = {
//   nama: "budi",
//   kelas: "XI ipa",
//   alamat: "sindang indramayu",
// };

// // destructuring
// let {nama, kelas}siswa;

// console.log(`nama : ${siswa["nama"]}`);
// document.getElementById("nama").innerText = nama;
// console.log(`kelas : ${siswa["kelas"]}`);
// document.getElementById("kelas").innerText = kelas;
// siswa.usia = 17;
// console.log(siswa.usia);
// console.log(siswa.alamat);

let buku = {
  judul: "laskar pelangi",
  penulis: "andrea hirata",
  tahun: 2005,
};
let { judul, penulis, tahun } = buku;

console.log(`judul : ${judul}`);
// document.getElementById("judul").innerText = judul;
console.log(`penulis : ${penulis}`);
console.log(`tahun : ${tahun}`);
