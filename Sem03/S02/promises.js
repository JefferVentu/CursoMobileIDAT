// Promises(promesas): 
// Un promise es una excelente manera de manejar las operaciones asíncornas, se utiliza para averiguar si la operación asíncrona se completó correctamente o no.

// Una promesa tiene 3 estados:
// - pending (pendiente)
// - fullfilled (exitoso)
// - reject (rechazado)

// Un promise inicia con un estado pending (proceso aún si completar).
// Si la operación se realiza correctamente o es exitoso (el proceso finaliza con un estado fullfilled).
// Y si se produce un error el estado estará en rechazado.

// Sintaxis
// let promise = new Promise(func);

// la funcion "func" pasada como argumento toma dos argumentos
// - función resolve: primer argumento de la función func y se invoca, si funciona según lo previsto, al argumento de la función resolve se le asigna el valor devuelto.
// - función reject: Es el segundo argumento de la función "func", se invoca si algo falla. Por lo general se utiliza para el manejo de errores. Al argumento de la fucnión reject se le asigna el valor de retorno de error, que generalmente es un objeto.
/*
let func = function(resolve, reject){
    // agregar tareas síncronas o asíncronas
    if(  todo trabajo como esperas ){
        resolve( return value );
    }else{
        reject( return value )
    }
}

Crear un promise:


let countValue = new Promise(function(resolve, reject){
    if(count == true){
        resolve("Es un valor true");
    }
    else{
        reject("Es un valor false");
    }
});

let countValue = new Promise((resolve, reject)=>{
    // bloque de instrucciones
})
*/
/*
Método then():
Agrega callback o tareas que deben ejecutarse despues de que se complete la función dentro del promise.
*/

// Sintaxis
promise.then(callbackfn);

let promise = new Promise((resolve, reject)=>{
    resolve("Está realizado");
});

promise.then((resultado)=>console.log(resultado));

/*
Manejo de errores:
Cuando se rechaza, el control se salta al controlador de rechazo más cercano.
*/

let promise = new Promise((resolve, reject) => {
    reject("está rechazado");
});

promise.then((response)=>response.json()).catch((error)=>console.log(error));

// Conclusión
// las promisses se utilizan comunmente cuando se obtienen datos a través de la red o para otros tipos de programación asíncrona.
