let pole = [];
let cislo = Number(prompt('Zadej:'));

while (cislo != 0) {
  pole.push(cislo);
  cislo = Number(prompt('Zadej:'));
}

let nejmensi = pole[0];
for (let cislo of pole) {
  console.log(cislo);
  if (cislo < nejmensi) {
    nejmensi = cislo;
  }
}

console.log('Nejmenší číslo je ' + nejmensi);

nejmensi = pole[0];
for (let i = 0; i < pole.length; i++) {
  let cislo = pole[i];
  console.log(cislo);
  if (cislo < nejmensi) {
    nejmensi = cislo;
  }
}

console.log('Nejmenší číslo je ' + nejmensi);
