let gaseosas = ["Coca-Cola","Sprite","Fanta","Kola Escocesa"];
let precio = ["7","8","10","6"]

console.log(gaseosas);

gaseosas.forEach(function(valor, indice, lista){
    lista[indice] = "Producto " + valor + " precio: "+precio[indice];
})

console.log(gaseosas);