// // // 100.Quyidagi namunani kuzatgan holda funksiya yasang.
// // // Namuna:
// // // Namuna("div*2") ᔍ "<div></div><div></div>"
// // // Namuna("p*1") ᔍ "<p></p>"
// // // Namuna("li*3") ᔍ "<li></li><li></li><li></li>"

// function takrorlash(matn) {
//   let a = matn.split("*");
//   let natija = "";

//   for (let i = 1; i <= a[1]; i++) {
//     natija += "<" + a[0] + "></" + a[0] + ">";
//   }

//   return natija;
// }

// console.log(takrorlash("li*3"));
// console.log(takrorlash("div*2"));
// console.log(takrorlash("p*1"));

// // //================================================================================================

// // // 101.Funksiya butun son qabul qilsa, 1dan ushbu butun
// // // songacha bo’lgan sonlar yig’indisini qaytarsin.
// // // Namuna:
// // // namuna(3) ᔍ 6
// // // // 1 + 2 + 3 = 6
// // // namuna(10) ᔍ 55
// // // // 1 + 2 + 3 + ... + 10 = 55
// // // namuna(7) ᔍ 28
// // // // 1 + 2 + 3 + ... + 7 = 28

// // function sonlaryigindisi(son) {
// //   let sum = 0;
// //   if (son === 0) {
// //     return 0;
// //   }
// //   for (let i = 1; i <= son; i++) {
// //     if (i >= 1) {
// //       sum += i;
// //     }
// //   }
// //   return sum;
// // }
// // console.log(sonlaryigindisi(10));

// // //=================================================================================================================

// // // 102.Funskiya son va object qabul qiladi. Objectni ichida min va
// // // max degan propertilar mavjud. Agar ushbu son min va maxni
// // // oralig’ida bo’lsa funksiya true qaytarsin, aks holda false
// // // Namuna:
// // // Namuna(4, { min: 0, max: 5 }) ᔍ true
// // // Namuna(4, { min: 4, max: 5 }) ᔍ true
// // // Namuna(4, { min: 6, max: 10 }) ᔍ false
// // function oraliqdagison(son, oraliq) {
// //   if (son >= oraliq.min && son <= oraliq.max) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // console.log(oraliqdagison(8, { min: 0, max: 5 }));
// // console.log(oraliqdagison(3, { min: 0, max: 5 }));

// // //===============================================================================================================

// // // 103.Funksiya son qabul qiladi, agar ushbu sonni kvadratga
// // // ko’tarsak, ushbu natijaning oxirigi qiymati sonning o’ziga teng
// // // bo’lsa funksiya true qaytarsin, aks holda false.
// // // Namuna:
// // // Namuna(1) ᔍ true
// // // Namuna(3) ᔍ false
// // // // 3^2 = 9
// // // Namuna(6) ᔍ true
// // // // 6^2 = 36 (ends with 6)
// // // Namuna(95) ᔍ false
// // // // 95^2 = 9025 (does not end with 95)

// // function kvadiratga(son) {
// //   if (son == 0) {
// //     return "qiymat kiritilmagan!";
// //   }
// //   if (son == son ** 2 % 10) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // console.log(kvadiratga(2));
// // console.log(kvadiratga(6));
// // console.log(kvadiratga(3));
// // console.log(kvadiratga(95));

// // //==========================================================================================

// // // 104.Funksiya massiv qabul qiladi. Funksiya massivning elementlariga o’sha elementning indexini qo’shgan holda yangi
// // // massiv qaytarsin.
// // // Namuna:
// // // Namuna([0, 0, 0, 0, 0]) ᔍ [0, 1, 2, 3, 4]
// // // Namuna([1, 2, 3, 4, 5]) ᔍ [1, 3, 5, 7, 9]
// // // Namuna([5, 4, 3, 2, 1]) ᔍ [5, 5, 5, 5, 5]

// // function indexiniqoshish(arr) {
// //   let yangiarr = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     yangiarr.push(arr[i] + i);
// //   }
// //   return yangiarr;
// // }
// // console.log(indexiniqoshish([0, 0, 0, 0, 0, 0]));
// // console.log(indexiniqoshish([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// //=====================================================================================================
// // 105.Funksiya ichimliklar massivini qabul qiladi. Funksiya
// // ichida shakari yo’q ichimlilarinigina qaytarishi kerak. Ichida
// // shakari bor ichimliklar ro’yxati:
// // cola
// // fanta
// // Namuna:
// // Namuna(["fanta", "cola", "water"]) ᔍ ["water"]
// // Namuna(["fanta", "cola"]) ᔍ []
// // Namuna(["lemonade", "beer", "water"]) ᔍ ["lemonade",
// // "beer", "water"]

// // function ichimliklar(arr) {
// //   let natija = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== "cola" && arr[i] !== "fanta") {
// //       natija.push(arr[i]);
// //     }
// //   }
// //   return natija;
// // }
// // console.log(ichimliklar(["fanta", "cola", "water"]));
// // console.log(ichimliklar(["fanta", "cola"]));
// // console.log(ichimliklar(["lemonade", "beer", "water"]));
// //===================================================================================================================

// // 106.Funksiya son qabul qilsa, Funksiya ushbu sonda nechta
// // raqam borligini qaytarsin.
// // Namuna:
// // Namuna(123) ᔍ 3
// // Namuna(56) ᔍ 2
// // Namuna(7154) ᔍ 4
// // Namuna(61217311514) ᔍ 11
// // Namuna(0) ᔍ 1

// // function nechtaraqambor(n) {
// //   let matn = String(n);
// //   let count = 0;
// //   for (let i = 0; i < matn.length; i++) {
// //     count++;
// //   }
// //   return count;
// // }
// // console.log(nechtaraqambor(12345));

// //===================================================================================================
// // 107.Funksiya son qabu qilsa, ushbu funksiya sonning raqamlari
// // o’rni istalgancha almashtirib eng katta hosil bo’lishi mumkin
// // bo’lgan sonni qaytarsin.
// // Namuna:
// // Namuna(123) ᔍ 321
// // Namuna("001") ᔍ 100
// // Namuna(999) ᔍ 999
// // 107chi masalani ishalmadim shuni darsda korib ketaylik domla

// //================================================================================================================

// // 108.Funksiya 2ta sonlar oralig’ini qabul qiladi. Funksiya ushbu
// // oraliqdan bironta random son qaytarsin.
// // Namuna:
// // Namuna(5, 9) ᔍ 7
// // Namuna(5, 9) ᔍ 9
// // Namuna(5, 9) ᔍ 5

// // function tasodifyson(son1, son2) {
// //   return Math.round(Math.random() * (son2 - son1) + son1);
// // }

// // console.log(tasodifyson(1, 10));
// // console.log(tasodifyson(5, 9));

// //==================================================================================================================
// // 109.Funksiya son qabul qiladi. Ushbu funksiya ushbu son narissistik son bo’lsa true qaytarsin, aks holda false. Narissistik son
// // degani sonning har bir raqamini sonning uzunligi miqdorida
// // darajaga ko’tarib qo’shib chiqilganda o’ziga teng bo’lgan son.
// // Namuna:
// // Namuna(153) ᔍ true
// // // 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// // Namuna(370) ᔍ true
// // Namuna(1652) ᔍ false

// // function narissistikson(son){

// // }

// //====================================================================================================================

// // 110.Funksiya string qabul qiladi.Funksiya ushbu stringda
// // nechta katta harf ishtirok etganin qaytarsin.
// // Namuna:
// // Namuna("fvLzpxmgXSDrobbgMVrc") ᔍ 6
// // Namuna("JMZWCneOTFLWYwBWxyFw") ᔍ 14

// function kattaharf(matn) {
//   let count = 0;
//   for (let i = 0; i < matn.length; i++) {
//     if (matn[i] >= "A" && matn[i] <= "Z") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(kattaharf("qwerfgvcFFFFFF"));
