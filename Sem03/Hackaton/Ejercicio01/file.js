let lista = [];
let i = 0;
let precioDescuento = [];

do{
    let dato = prompt ("Ingresa el dato N"+(i+1)+":");
    lista.push(parseFloat(dato));
    i++;
}while(i < 5);

for(let j = 0; j < lista.length; j++){
    let nuevoPrecio = lista[j]*0.7;
    precioDescuento.push(parseFloat(nuevoPrecio));
}
console.log("Lista de precios: ");
console.log(lista);
console.log("Lista de precios con descuento del 30%: ");
console.log(precioDescuento);