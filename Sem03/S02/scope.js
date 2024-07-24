// Scope = alcance
/*

Restringe el acceso y visibilidad de las variables en programa

Características del Scope(alcance):
- limita la visibilidad y accesibilidad de una variable
- controla la vida de la variable y recursos asignados
- ayuda a proteger los recursos y facilita la depuración

Javascirpt tiene 2 ámbitos:
- Scope (alcance) global: es el más externo en el programa de javascript, aquí todas las variables son accesibles desde caulquier otro alcance del programa.

*/

var a=10;

let func = function(){
    let introFunc = function(){
        console.log("a es accesible: ", a)
    }
    introFunc();
}

func();

// escribir un programa que muestr el cambio dentro de una función

let texto = "hola, estamos en el texto global de js";

function saludar (){
    var texto1 = "Bienvenidos";
    console.log(texto + texto1)
}

saludar();
console.log(texto);

// reglas:
// 1. Utilice var, let, y const para variables y constantes siempre que sea posible.
// 2. Declarar e inicializar siempre todas las variables al inicio o alcance.

