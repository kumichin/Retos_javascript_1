
/*  #00.- Sintaxis, variables, tipos de datos y hola mundo
Ejercicio sacado de la pagina : https://retosdeprogramacion.com/roadmap/ , creada por mouredev
 *
 * EJERCICIO:
 * - Crea un comentario en el código y coloca la URL del sitio web oficial del
 *   lenguaje de programación que has seleccionado. --
 * - Representa las diferentes sintaxis que existen de crear comentarios 
 *   en el lenguaje (en una línea, varias...). --
 * - Crea una variable (y una constante si el lenguaje lo soporta). --
 * - Crea variables representando todos los tipos de datos primitivos
 *   del lenguaje (cadenas de texto, enteros, booleanos...). --
 * - Imprime por terminal el texto: "¡Hola, [y el nombre de tu lenguaje]!"
 *
 */

//Lenguaje escogido: javascript
// URL del sitio web oficial del lenguaje: https://developer.mozilla.org/es/docs/Web/JavaScript , no se si será esa la oficial pero se que se actualiza y esta al dia lo que la convierte en buena fuente de consulta

//Soy un comentario de una linea
/*
Soy un comentario
de varias
lineas
*/

//variables

var variable = 'poco recomendable de usar';

let variable2 = 'soy una variable que se puede renombrar';

const variable3 = 'soy una variable constante que no se puede renombrar';

//tipos de datos

const string = 'soy una string, tb llamada cadena de datos';

const booleanos = true;

const number = 4;

let array = [2, 'perro', 4, 'gato', 3, 5, 'casa', 'zorro'];

let objetoGato = {
    nombre: 'SunHee',
    edad: 4,
    color: 'atigrada oscura',
    patas: 4,
    gustos: ['correr', 'saltar', 'jugar', 'dormir']
}

console.log('Hola, soy Javascript');