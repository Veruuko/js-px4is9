function jeprvocislo(cislo) {
  if (cislo < 2) {
    return false;
  }
  for (let i = 2; i < cislo; i++) {
    if (cislo % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(jeprvocislo(865));
console.log(jeprvocislo(123));
console.log(jeprvocislo(749));
console.log(jeprvocislo(251));
console.log(jeprvocislo(1));
