let cislo1 = Number(prompt('Zadej první'));
let cislo2 = Number(prompt('Zadej druhé'));

for (let i = cislo1; i <= cislo2; i++) {
  if (i % 2 === 0) console.log(i);
}
