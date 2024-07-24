// CALLBACK:
// Un callback es una función que se pasa como argumento dentro de una función el cual se denomina función de devolución de llamada o callback.

// los callbacks o funciones de devolución de llamada son funciones que se llaman después de que finaliza un evento asíncrono, su objetivo principal es llevar a cabo tareas que se realicen después de que finalice el evento.

// Función

function saludar (name, callback){
    console.log("Hola "+ " "+ name);
    callback();
}

// funcion callback

function llamame(){
    console.log("soy una función callback");
}

// pasar la funcion como argumento
saludar("Jefferson", llamame);

// setTimeout Function
// es una función asíncrona, agrega retrasos a las tareas que deben realizarce después de un cierto periodo de tiempo.

// setTimeout(callback, time);

setTimeout(function(){
    console.log("El setTimeOut es llamado luego de 5 segundos.");
}, 5000);