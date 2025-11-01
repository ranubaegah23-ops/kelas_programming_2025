// operator

let a = 15;
let b = 2;

// penjumlahan
console.log(a + b);


// pengurangan
console.log("5" - 1);

// perkalian
console.log(3 * 7);

// pembagian 
console.log(15 / 3);
 
// sisa bagi
console.log(50 % 10);

// pangkat
console.log(5 ** 3);

// increanment & decrement
let bil = 4;
console.log(bil++);    //4
console.log(++bil);    //6
console.log(++bil);    //7
console.log(++bil);    //8
console.log(--bil);    //7

// perbandingan (> , < , >= , != , == , ===)

console.log(20 > 5);//true
console.log(5 > 45);//false

// logika (&& , || , !)

console.log("operator logika");
console.log( true && true); //true
console.log( true && false && true); //false
console.log( true || false || true); //true
console.log(!true); //false

// penugasan (= , +=)
let x = 10;
x += 5;
x -= 4;
console.log(x);

// type
let nama
console.log(typeof nama); 

// ternary

// let umur = 17;
// let status = (umur >= 18) ? "dewasa" : "anak anak";
// console.log(status);

let umur = 20;
let keterangan = (umur >= 17) ? "sudah bisa bikin ktp" : "belum bisa bikin ktp";
console.log(keterangan);
