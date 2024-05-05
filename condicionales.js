
/*
Se trata de escribir un script que diga si un número es par o imper.
Recordar que un numero es par cuando al dividirlo entre 2, su resto da 0
*/

let numero = 17;

if (numero%2 == 0){
    console.log('par')
}else{
    console.log('impar')
};


/*
Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo
*/

let numero1 = parseInt(prompt('Ingrese un número para saber si es positivo o negativo'));

if(numero1 >= 0){
    console.log('El número introducido es positivo')
}else{
    console.log('El número introducido es negativo')
};

/*
En este ejercicio debes pedir dos números enteros y devolver el cociente de dividir el primero entre el segundo, 
pero si este es cero no debe hacer la división, sino lanzar un mensaje de error
*/

let numero2 = parseInt(prompt('Dime un número para hacer la división'));
let numero3 = parseInt(prompt('Dime otro número para la división'));

if (numero2 > 0 && numero3 > 0){
    console.log(numero2/numero3)
}else {
    console.log('El número debe ser mayor que 0 para poder hacer la división')
};

/*
Este script pide al usuario que teclee una letra entre A, B, C, D. 
Si pulsa la letra A en mayúsucla o en minúscula le dará el mensaje de que ha acertado, 
en caso contrario le dirá que se equivocó.
*/

let letra = prompt('dime una letra entre A, B, C, D');

if(letra == 'a' || letra =='A'){
    console.log('HAS ACERTADO')
}else{
    console.log( 'lo siento pero no adivinaste la letra')
};

/*
En este ejemplo el usuario tecleará dos números. Debe devolver la diferencia entre el mayor y el menor
*/

let diferencia1 = prompt('Dime un numero para calcular la diferencia');
let diferencia2 = prompt('Dime otro numero para calcular la diferencia');

if(diferencia1 > diferencia2){
    console.log(diferencia1 - diferencia2)
}else {
    console.log(diferencia2 - diferencia1)
};

/*
Este ejercicio dirigirá a los clientes a la barra de bebidas o a la de comidas, 
para ello el cliente puede pedir vino, cerveza, refresco, agua. 
Si pide un cerveza o vino se le dirige a la barra y si no pues se le dirige a la tienda.
*/

let eleccion = prompt('Elige entre vino, cerveza, agua o refresco');

if (eleccion == 'vino' || eleccion == 'cerveza'){
    console.log('Dirijase a la barra, por favor')
}else{
    console.log('Dirijase a la mesa, por favor')
}

/*
Este programa te ayuda a viajar. 
El programa pide al usuario si va a viajar con coche, tren, bicicleta o autobús. 
Si va en tren o autobus le recordará que lleve dinero para el billete.
*/

let viaje = prompt('¿En que va a viajar? tren, autobus, coche o bicicleta');

if (viaje == 'tren' || viaje == 'autobus'){
    console.log('Recuende llevar dinero para el billete')
}else{
    console.log('Buen viaje')
};

/*
En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. 
Este ejercicio debe tomar la longitud del tramo en kilometros y el tiempo empleado, 
si la velocidad está entre 40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.
*/

let longitud = parseInt(prompt('Dime la distancia que has recorrido'));

let tiempo = parseInt(prompt('Dime el tiempo que has tardado'));

let velocidad = longitud / tiempo;

if(velocidad > 40 && velocidad < 60){
    console.log('Tu velocidad es de ' + velocidad + ' Muy bien, ¡has superado la prueba!');
}else{
    console.log('Tu velocidad es de ' + velocidad + ' Km/h' + ' ¡estas descalificado!');
};


/*
Una tienda aplica un descuento del 15% para las compras que 
incluyan más de 10 artículos iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar 
y calcular la cantidad a pagar sabiendo el número de artículos y el precio de cada uno.
*/

let articulos = parseInt(prompt('¿Cuantos artículos has comprado?'));
let precio = parseInt(prompt('¿Cual es su precio?'));
let factura = articulos * precio;

if(articulos > 10 && precio > 40){
    console.log(factura = factura - factura * 0.15);
}else{
    console.log(factura);
};

/*
Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y 
calcule la nota promedio. El resultado que dará será suspenso si la media es menor de 5, 
aprobado si está entre 5 y 7 y  Notable por encima de 7.
*/

let nota1 = parseInt(prompt('Dime la nota del primer trimestre'));
let nota2 = parseInt(prompt('Dime la nota del segundo trimestre'));
let nota3 = parseInt(prompt('Dime la nota del tercer trimestre'));

media = parseInt((nota1 + nota2 + nota3) / 3);

if(media >= 5 && media <= 7){
    console.log('tu nota es '+ media + ' has aprobado, enhorabuena. disfruta de tus vacaciones');
}else if (media > 7){
    console.log('tu nota es '+ media + ' tienes un sobresaliente, enhorabuena. disfruta de tus vacaciones');
}else{console.log('tu nota es '+ media + ' Has suspendido, intentalo de nuevo el proximo año');

};


