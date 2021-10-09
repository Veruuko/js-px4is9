let vstup = Number(prompt('Zadej cislo'));
console.log(vstup);
let soucet = 0;

while (vstup !== 0) {
  soucet = soucet + vstup;
  vstup = Number(prompt('Zadej cislo'));
  console.log(soucet);
}
