
/*
El usuario debe de introducir 2 valores numéricos y 
la aplicacion debe de indicar cual es el mayor, el primero o el segundo.
la idea es usar sentencia if reducida, condicion: true/false
*/
//resultado = (condición) ?(valor si cierto) : (valor si falso)
let numero5 = parseInt(prompt('introduce un numero'));
let numero6 = parseInt(prompt('introduce otro numero'));

mayor = (numero5 > numero6) ? 'primer numero':'segundo';

console.log(mayor);

/*
El usuario debe entrar un número y su cuadrado. 
Si es correcto el script enviará un mensaje de acierto en caso contrario dirá que se produjo un error.
Se trata de usar el if resumido (cond?true:false)
*/

let num = parseInt(prompt('Repaso de cuadrados. Diga un numero'));
let cuadrado = parseInt(prompt('¿Cual es el cuadrado del numero anterior?'));

operacion = (cuadrado == num * num) ? '¡Has acertado, genial!' : 'No es correcto, intentalo de nuevo';

console.log(operacion);

/*
En este caso, también usando el operador ternario o if reducido, 
un visitante a la página deberá teclear su edad, 
si es igual o mayor de 18 recibirá el mensaje de "Entra" en caso contario 
deberá decirle los años que tiene que estperar para entrar
*/

let edad = parseInt(prompt('teclea tu edad'));
falta = 18 - edad;

requerida = (edad > 18) ? 'entra': ('tienes que esperar ' + falta + ' años para poder entrar');

console.log(requerida);

/*
En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. 
Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y 
si pide verdura se le ofrecerá agua
Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura.
*/

let menu, bebida;
menu = prompt("Tipo de menu: carne, pescado, verdura")
switch (menu){
    case 'carne':
        bebida = "¿Desea beber vino tinto?";
        break;
    case 'pescado':
        bebida = "¿Desea beber vino blanco?";
        break;
    case 'verdura':
        bebida = "¿Desea agua?";
        break;
    default:
        bebida = "Elija carne pescado o verdura";
    }
console.log(bebida);

/*
En una sala de juegos existen cuatro salas: 
Consolas, 
Juegos 2D, 
Juegos 3D, 
Realidad Virtual. 
Si un usuario paga  4 créditos puede acceder a todas, 
si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y 
si paga 1 solo a la primera sala.
*/
let creditos, sala;
creditos = parseInt(prompt('¿Cuantos créditos vas a pagar?'));

switch (creditos){
    case 1:
        sala = 'solo puedes acceder a la sala consolas';
        break;
    case 2:
        sala = 'puedes acceder a la sala consolas y de juegos 2D';
        break;
    case 3:
        sala = 'puedes acceder a consolas, juegos 2D y juegos 3D'
    case 4:
        sala = 'puedes acceder a todas las salas';
        break;
    default:
        sala = 'tienes que pagar algo para poder jugar a algo aqui';
}
console.log(sala);


/*
Aprtir de un número de mes tecleado por un usuario el programa debe indicar la estación del año.
Las estaciones serán 12,1,2: Invierno. 3,4,5 primavera, 6,7,8 verano y 9,10,11 otoño.
*/

let meses, estacion;
meses = parseInt(prompt('dime un mes del año, en numero'));

switch(meses){
    case 12:
    case 1:
    case 2:
        estacion = 'invierno';
        break;
    case 3:
    case 4:
    case 5:
        estacion = 'primavera';
        break;
    case 6:
    case 7:
    case 8:
        estacion = 'verano';
        break;
    case 9:
    case 10:
    case 11:
        estacion = 'otoño';
        break;
    default:
        estacion = 'introduce un numero de mes correcto';
}
console.log(estacion);

/*
En este ejercicio el usuario entra la longitud de la base y 
el alto de un cuadrado. Si la base y el alto son idénticos la respuesta será "Es un cuadrado", 
si la base es mayor que el alto dira "Rectángulo horizontal" y en caso contrario dirá "Rectángulo vertical".
*/

let base, alto;

base =parseInt(prompt('¿cual es la base?'));
altura = parseInt(prompt('¿cual es la altura?'));

if(base == altura){
    console.log('cuadrado')
}else if(base > altura){
    console.log('rectangulo horizontal')
}else{
    console.log('rectangulo vertical')
}

/*
En una tienda de coches se quiere redirigir a un cliente hacia una sección de acuerdo al tipo de coche que elija.
 Si elige tipo gasolina o 1 se le enviará a la oficina numero 100. Si elije el tipo diesel o 
 2 irá a la oficina 200 y si elige eléctrico o 3 se le enviará a la oficina 300.
*/

let tipo, gasolina;
tipo = prompt('dime el coche que quieres');

switch(tipo){
    case 'gasolina':
    case '1':
        oficina = '100';
        break;
    case 'diesel':
    case '2':
        oficina = '200';
        break;
    case 'electrico':
    case '3':
        oficina = '300';
        break;
    default:
        oficina = 'xxx';
}
console.log(oficina);

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 400 euros le descuenta un 15%
*/

let compra, descuento;
compra = parseInt(prompt('precio de tu compra'));

switch(true){
    case compra <=100:
        descuento = 'no hay descuento';
        break
    case compra > 100 && compra <=300:
        descuento = 5;
        break
    case compra > 300 && compra <=500:
        descuento = 10;
        break
    case compra > 400:
        descuento = 15;
    default:
        descuento = ' el maximo es el 15% de descuento';
}

total = compra - (compra * (descuento / 100));
console.log(total);

/*
En este ejercicio el script convertirá las notas numéricas de un examen en palabras: 
0 - 4 suspenso, 5-6 aprobado, 7-8 notable, 9-10 sobresaliente.
*/

let nota, examen;
nota = parseInt(prompt('Introduce tus notas'));

switch(true){
    case nota >= 0 && nota <=4:
        examen = 'suspenso';
        break
    case nota >4 && nota <= 6:
        examen = 'aprobado';
        break
    case nota > 6 && nota <= 8:
        examen = 'notable';
        break
    case nota > 8 && nota <=10:
        examen = 'sobresaliente';
    default:
        examen = ' introduce unas notas validas';
}
console.log(examen);
