
/*
Has hecho una compra y sabes el precio del productoy su iva. Haz un script que te calcule el precio total que vas a 
pagar por tu compra.
Te recuerdo que para calcular el total debes sumar al precio el resuelto de multiplicar precio por el iva y dividir por 100
*/

let precio = 200;

let precioTotal = 200 + 21*200/100;


console.log(precioTotal);

/*
En una variable tienes el lado de un cuadrado, debes escribir un programa que te 
calcule el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.
*/

let lado = 40;
let area = lado * lado;
let perimetro = lado * 4 ;

console.log(area);

console.log(perimetro);

/*
Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" 
seguido del nombre del usuario.
Para leer el nombre usa un prompt con un texto indicativo como "Escribe tu nombre"
*/

let nombre = prompt ('escribe tu nombre');

let saludo = "Hola" + ' ' + nombre;

console.log(saludo);

/*
En este ejercicio vas a pedir al usuario que teclee tres números enteros y el script mostrará como 
resultado el valor medio de los tres.
Recuerda que la media de tres números se calcula sumando los tres y dividiendo entre 3.
*/

let numero1 = parseInt(prompt('diga un numero'));
let numero2 = parseInt(prompt('diga otro numero'));
let numero3 = parseInt(prompt('diga un último numero'));

let media = (numero1 + numero2 + numero3)/3;

alert ("la media de los numeros que me has dicho es"+ " " + media);

/*
Escribe un programa que solicite al usuario ingresar el número de kilómetros recorridos por su coche y el número de litros consumidos . 
El script debe mostrar el consumo de combustible por kilómetro.
Un problema matemático muy simple numero de litros dividido por número de kilómetros.
*/

let kilómetro = parseInt(prompt('Ingresa el número de kilometros'));
let litros = parseInt(prompt('número de litros consumidos'));

let combustible = litros/kilómetro;

alert ('Su consumo de gasolina por kilómetro es ' + combustible + ' kilómetros/litro');


/*
Cambio de unidades. en este ejercicio debes convertir a segundos una medida de tiempo dada en horas y minutos.
Recuerda una hora son 60 minutos y cada minuto son 60 segundos.
*/

let horas = 2;
let min = 30;

segundos = horas * 3600;

segundos += min * 60;

console.log(segundos + ' ' + 'segundos');


/*
En este script debes pedir al usuario un número de dos dígitos y debes devolver el número de unidades y de decenas, 
o sea, cada dígito del número. Usa solo operationes aritméticas
Recuerda si divides un número entre 10 el cociente entero es el número de decenas y el resto es el número de unidades
*/

let digitos = parseInt(prompt('escribe un número entre 10 y 99'));
let decenas = digitos / 10;
let unidades = digitos % 10;

console.log(decenas+" decenas y ");
console.log(unidades+" unidades");

/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. 
Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias
*/

let comensales = parseInt(prompt('inserte el número de comensales'));

let Patatas = 200 * comensales;
let papas = Patatas / 1000;

let huevos = 5 * papas;

let cebolla = 300 * papas;
let Cebolla = cebolla / 1000;



alert ('La lista de ingredientes para ' + comensales + ' comensales es: ' + papas + ' kilos de papas ' + huevos + ' huevos y '+ Cebolla + ' kilos de cebolla');

/*
Este ejercicio es todo un clásico si lo haces a la primera y sin tardar mucho, puedes estar seguro: entiendes las variables.
Tienes que escribir un programa que intercambie el valor de dos variables. Al final la primera variable debe terner el valor de la segunda y la segunda el valor de la primera.
 No vale usar arrays ni asignación múltiple
*/

let variable1 = 'soy la variable 1';
let variable2 = 'soy la variable 2';


console.log('variable 1 ' + variable1);
console.log('variable 2 ' + variable2);

let aux;
aux = variable1;
variable1 = variable2;
variable2 = aux;
console.log('variable 1 ' + variable1);
console.log('variable 2 ' + variable2);

/*
Pues seguimos con los números. Escribe un script  que dado un número nos devuelva true si es un 
número par y false si es un número impar. No usar condiconales.
*/

let numero = parseInt(prompt('introduce un número entero para ver si es par'));

let resto = numero%2 ;

let par = resto == 0;

console.log('el numero introducido es ' + par + '.')