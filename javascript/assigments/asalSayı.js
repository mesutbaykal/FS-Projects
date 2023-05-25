//? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//* NOT:
//* 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//* Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//* break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.

let number;
let isPrime = true;

do {
  number = parseInt(
    +prompt(
      "For checking is it prime number or not,enter a number bigger than 1"
    )
  );
} while (number <= 1);

for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  alert(`${number} is a prime number`);
} else {
  alert(`${number} is a not prime number`);
}
