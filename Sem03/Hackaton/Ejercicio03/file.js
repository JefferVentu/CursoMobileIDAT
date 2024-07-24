let numerosPrimos = [];

function primos(num){
    for(let i=2; i < num; i++){
        if(num%i===0){
            return false;
        }
    }
    return num !== 1;
}

for (let i=1; i<50; i++){
    if(primos(i)){
        numerosPrimos.push(i);
        if(numerosPrimos.length==10){
            break;
        }
    }
}

console.log(numerosPrimos);

let pares = numerosPrimos.filter((valor)=> valor%2==0);
let impares = numerosPrimos.filter((valor)=> valor%2!=0);

console.log(pares);
console.log(impares);