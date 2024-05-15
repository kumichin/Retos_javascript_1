
/*
usando un bucle for escribir un script que pida un valor entero y muestre en pantalla una lista de numeros desde el cero
al valor tecleado. los numeros se separan por comas.*/

/*let contar, numero, muestra;
numero = parseInt(prompt('Inserte un numero para la cuenta adelante'));

for (contar = 0; contar < numero; contar++) {
    muestra += contar + ", "; 
}
muestra += contar;
console.log(muestra);

/*
Se trata de que dado un número entero el script muestre una cuenta atrás, 
es decir, una lista de numeros separados por comas desde el número tecleado hasta el 0.
*/

/*let numero1, contar1, atras;

numero1 = parseInt(prompt('Dime un numero para la cuenta atrás'));

for (contar1 = numero1; contar1 > 0; contar1--) {
   atras += contar1 + ',';   
}
atras += contar1;
console.log(atras);
*/

/*
Se quiere un bucle que genere una lista con todos los números pares positivos 
por debajo del número tecleado por el usuario. Los números se aparecerán en una ventana alert con cambios de linea 
(carácter '\n').
*/

/*let numero2, par = 0, cuenta, mensaje = '';
numero2 = parseInt(prompt('Inserte un numero para calcular los pares'));

for (cuenta = 1; par < numero2; cuenta++) {
    mensaje += par + '\n';
     par = cuenta * 2;
}

console.log(mensaje);*/

/*
Este script debe escribir la tabla de multiplicar del número que el usuario teclee.
 La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n"
*/

/*let num, tabla, producto, mensaje;

num = parseInt(prompt('di un numero para multiplicar'));

for (tabla = 0; tabla <= 10; tabla++) {
    producto = tabla * num;
    mensaje += producto + '\n';
    
}

console.log(mensaje);*/

/*
En este ejercicio mezclamos bucles con condicionales: el usuario escribe un número y el script imprimirá 
(console.log) todos los números menores que al dividirlos por 3 den como resto 2.
Recuerda: un número es múltiplo de N cuando el dividirlo por N el resto es 0.
*/
/*let n, control

n = parseInt(prompt('diga un numero para calcular los menores que al dividir entre 3 dan 2'));

for (control = 0; control < n; control++) {
    
    if(control % 3 == 2){
    console.log(control);
}
}*/

/*
Este script el usuario deberá teclear una letra y un número, 
y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
*/

/*let letra, num1, repe, resultado;

letra = prompt('di una letra');
num1= parseInt(prompt('Escriba un entero'));

for (repe= 0; repe < num1; repe++) {
resultado += letra;
}
console.log(resultado);*/


/*
Se quiere tener un contador de dos dígitos en base 5. 
El funcionamiento es simple: el dígito de la derecha irá aumentando y cuando pase de 4 su 
valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. 
El contador debe deternerse cuando alcancemos el valor 1:4
*/

/*let izquierda, derecha;

for (izquierda = 0; izquierda < 2; izquierda++) {
    for (derecha = 0; derecha < 5; derecha++) { 
        console.log(izquierda + ':' + derecha);
    }
}*/

/*
Se trata de dibujar un triángulo rectángulo con asteriscos. 
El usuario tecleará un valor entero, el programa escribirá con asteriscos tantas lineas como diga ese número. 
Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.
Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.
*/

let dato, asterisco, filas, columna;

/*dato = parseInt(prompt('inserte un numero'));
for (filas = 0; filas< dato; filas++) {
    asterisco = ''
    for (columna = 0; columna <= filas  ; columna++) {
        asterisco += '*';
        
       

    }
     console.log(asterisco + '\n')
}
*/

/*
Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 y 
el número tecleado por el usuario. El resultado será de la forma "Los números enteros de 0 a n  suman suma"
*/

/*let num3, suma = 0, sumando;

num3 = parseInt(prompt('introduce un numero para sumarlo'));

for (sumando = 0; sumando <= num3; sumando++) {
    suma += sumando;
    
}

console.log(suma);*/

/*
Programa un script que pida al usuario que teclee 4 números (uno cada vez). 
Con esos números el programa deberá calcular la media aritmética. 
O sea la suma de los 4 números dividida entre 4
*/

let numero, suma, media, vuelta;
suma = 0;


for (vuelta = 0; vuelta < 4; vuelta++) {
    numero = parseInt(prompt('teclear numero' ));
    suma += numero;
    
}
media = suma/4;

console.log(media);









