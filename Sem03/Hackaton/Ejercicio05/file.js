/*
let jugadores = ["Zambrano", "Tapia", "Sonne", "Lopez", "Gallese"];
let nroCamiseta = [3,8,13,15,1];

jugadores.forEach(function(valor, indice, lista){
    lista[indice] = "Jugador "+ valor +" con el número "+nroCamiseta[indice];
});

console.log(jugadores);
*/

let jugadores = [
    {nombre: "Gallese", numero: 1},
    {nombre: "Cueva", numero: 10},
    {nombre: "Sonne", numero: 23},
    {nombre: "Lapadula", numero: 14},
    {nombre: "Zambrano", numero: 2},
]

let maxNumero = jugadores.reduce(function(max, val1){
    return val1.numero > max.numero? val1:max;
},jugadores[0]);

let minNumero = jugadores.reduce(function(min, val1) {
    return val1.numero < min.numero ? val1 : min;
}, jugadores[0]);

console.log(maxNumero);
console.log(minNumero);