// ASYNC / AWAIT
// Incorporado en la versión ECMAScript 2017

// ASYNC
// Las funciones asíncronas nos permite escribir código basado en promesas, como si fueran sincrónico, sin bloquear el hilo de ejercución y operar de manera asíncrona

// Sintáxis

async function getData(url){
    // bloque de instrucciones
}

// ejemplo de una función asíncrona:

async function getData(){
    console.log("es una función Async");
    return Promise.resolve(1);
}

getData.then(function(result){
    console.log(result);
});

// AWAIT
// La palabra clave de await se utiliza dentro de la función para esperar la operación asíncrona.

// Sintaxis:
let result = await promise.then();

// ejemplo de await
// fecth(): permite realiza peticiones o solicitudes http

async function getData(url){
    const data = await fetch(url);
    return data;
}

getData(url).then((data)=>console.log(data));