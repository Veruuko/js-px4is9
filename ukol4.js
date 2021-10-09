let jmeno = prompt('Jake je tve jmeno?');
let vek = prompt('Kolik je Ti let?');
let rizeni = vek >= 18;
let zbyva = 18 - vek;

if (rizeni) {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je vám ' +
      vek +
      ' let a tak máte právo řídit auto.'
  );
} else {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je vám ' +
      vek +
      ' let a tak musíte počkat ještě ' +
      zbyva +
      ' let, než budete moci řídit auto.'
  );
}
