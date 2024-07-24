let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "setiembre", "octubre", "noviembre", "diciembre"];

console.log("Meses del año:");
console.log(meses);

for (let i=4; i<9; i++){
    meses[i] = meses[i].toUpperCase();
}

console.log("Meses de Invierno mayuscula:")
console.log(meses);