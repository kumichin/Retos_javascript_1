
/*
Usando un bucle while escribir un script que pida un valor entero y cree un a 
lista con los números desde el cero al valor tecleado. Luego
deberá sacar esa lista con alert. Los números se separarán por comas.
*/

/* let numero, list;

list = 0;

numero = parseInt(prompt('mete un numero'));

while ( list <= numero) {
    console.log(list);
    list++;
}

*/


/*
Se trata de pedir al usuario que teclee un número entre 1 y 5, 
si escribe alguno que esté fuera de ese rango deberá volver a pedir el número


let  numero=0;
numero = parseInt(prompt("Teclee un número entre 1 y 5"));

while (numero <1 || numero >5){
   
}
console.log (numero);
*/


/*
Un script que preguntará al usuario si desea continuar con el programa. 
Si el usuario pulsa una letra n (mayúscla o minúscula), el programa finalizará. 
Cualquier otra entrada repetirá la pregunta




let resp;
while (resp != 'n' && resp != 'N'){ 	  	 	
     resp = prompt("¿desea seguir con el programa?");
     }
alert("Programa finalizado");*/


/*
Determinar si el número que teclea el usuario es primo o no. 
Recordar que un número primo es el que solo puede dividirse por si mismo y por la unidad.



let numero, resto, divisor = 2, esPrimo = " Si";

numero = parseInt(prompt("Teclear un numero entero"));

while ((divisor <= numero) && (numero % divisor != 0)){
   divisor++;
}
if(divisor < numero){
   esPrimo=" NO ";
}
console.log("El numero "+ numero + esPrimo+" es primo");
*/


/*
Escribir un script que pida al usuario una contraseña. 
Si coincide con la clave definida en el script le devolverá el mensaje "Acceso concedido" y 
si no coincide le devolverá el mensaje "Acceso Denegado" . 
Si falla tres veces se emitirá el mensaje "Alerta, intruso"


let clave, veces = 0;



while (clave != 1234 && veces <= 3) {
    clave = parseInt(prompt('introduzca la contraseña'));
    if(clave === 1234){
    console.log('acceso concedido');
    } else{
        alert("Acceso denegado")
       veces++;
}if (veces == 3){
    alert("Alerta Intruso");
}
}
*/

/*

n este script se pedirá al usuario que teclee un número cada vez. 
El proceso acaba cuando teclee un 0 en cuyo caso además mostrará 
la suma de todos los números tecleados.

let numero, suma = 0;

while (numero != 0) {
    numero = parseInt(prompt('inserte un numero entre 0 y 10'));
    suma += numero
    
}console.log('la suma de todos los numeros que ha introducido es ' + suma);
*/


/*
Este script le pide al usuario que vaya tecleando números enteros positivos hasta que el usuario ingrese el 0. 
En esete caso el programa acaba mostrando el valor máximo y mínimo de los números tecleados.
*/

/*let max=0, min=0, numero;
numero = parseInt(prompt("Teclee un número"));
min = numero;
while (numero !=0){
    max = (numero > max)?numero:max;
    min = (numero < min)?numero:min;
    numero = parseInt(prompt("Teclee un número"));
}
if ( max== 0){
    alert("No ha tecleado ningún número ")
}
else{
    alert("El máximo es "+ max + "\nEl mínimo es "+min);
}*/


/*
Este script le pide al usuario que vaya tecleando números una y otra vez, 
pero solo números pares, en caso de que teclee un número impar 
el programa acabará y dirá la cantidad de números pares ingresados (el 0 cuenta como par).
*/


/*let numero=0, total=0;
while(numero % 2 ==0){
    numero = parseInt(prompt("Teclee un numero"));
   total ++;
}
total--;
alert("Ha ingresado en total "+ total+" numeros pares");*/


/*
Este script muestra un menu de opciones: 
1- Leer datos. 2- Mostrar datos 3- Fin. El usuario deberá teclear uno de ellos y 
el programa mostrará la opción elegida. 
Si teclea un valor fuera del menu se mostrará un mensaje de error y 
se vuelve a pedir un número de opción. El programa finaliza al teclear el 3.
*/

/*let numero, opcion;


while (numero != 3) {
    numero = parseInt(prompt('teclee el numero de la opcion que quiere: 1- Leer datos. 2- Mostrar datos 3- Fin'));
    switch (numero){
        case 1:
               alert("Opción: Leer datos");
               break;
        case 2:
               alert("Opción: Mostrar datos");
               break;
        case 3:
               alert("Opción: Finalizar");
               break;
       default:
               alert("Error, opción incorrecta");
       }
}*/


/*
Un script pedirá al usuario que vaya tecleando números de manera repetida. 
cuando pulse 0, el programa muestra "La suma es " seguido de la suma de los números. 
Si esta suma es par el programa se repite y si es impar el programa acaba.
*/

let numero=0, suma=0;


while(suma % 2 == 0){
   numero = parseInt(prompt("Teclee un numero"));
   while (numero != 0) {
    suma += numero;
    numero = parseInt(prompt("Teclee un numero"));

   }
   alert("La suma es " + suma);

}
alert('fin del programa');





