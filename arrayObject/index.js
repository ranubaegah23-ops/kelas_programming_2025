// let buah = ["mangga", "apel", "jeruk"];

// // console.log(buah[0]);
// // console.log(buah[1]);
// // console.log(buah[2]);
// // console.log(buah.length);

// buah.forEach(function (item) {
//   console.log(item);
//   document.getElementById("buahcontainer").innerHTML += `<li>${item}</li>`;
// });

let buku = [
  {
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    tahun: 2005,
  },
  {
    judul: "Bumi Manusia",
    penulis: "Pramoedya Ananta Toer",
    tahun: 1980,
  },
  {
    judul: "Negeri 5 Menara",
    penulis: "Ahmad Fuadi",
    tahun: 2009,
  },
];

buku.forEach(function (item, index) {
  console.log(item.judul);
  document.getElementById("judulnya").innerHTML += `<tr>
      <th scope="row">${index + 1}</th>
      <td>${item.judul}</td>
      <td>${item.penulis}</td>
      <td>${item.tahun}</td>
    </tr>`;
  //   document.getElementById(
  //     "judulnya"
  //   ).innerHTML += `<li>${item.judul} - penulisnya adalah : ${item.penulis}, tahunnya:(${item.tahun})</li>`;
});
