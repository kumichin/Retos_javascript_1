
/* Un anagrama es una palabra que resulta de la transposición de todas las letras de otra palabra. Dicho de otra forma,
 una palabra es anagrama de otra si las dos tienen las mismas letras, 
con el mismo número de apariciones, pero en un orden diferente. Esto se aplica también a grupos de palabras o frases. */

const palabra1 = "roma";
const palabra2 = "amor";

//convertir en minusculas las cadenas

const palabraMinuscula = palabra1.toLowerCase();
const palabraMinuscula2 = palabra2.toLowerCase();

//pongo todos los metodos por separado porque parece ser que no se puede usar varios metodos a la vez o aun no encontré la manera.
//si la hay la encontraré, seguro que asi

//primero convierto las palabras en un arreglo de letras con split() para poder usar los métodos de de arrays

let palabraComoArreglo1 = palabraMinuscula.split("");
let palabraComoArreglo2 = palabraMinuscula2.split("");

//luego ordeno el array por orden (por orden ascii porque no especifico metodo) con el metodo sort()
//esto se hace asi porque al ordenar las letras si salen las mismas letras en la misma frecuencia serán anagramas

let palabraOrdenada1 = palabraComoArreglo1.sort();
let palabraOrdenada2 = palabraComoArreglo2.sort();

//convertir todas las letras en minusculas para poder trabajar con ellas mejor. no he podido, mirar mañana



//luego uno ese orden para formar palabras nuevas hechas con el array ordenado que hice antes
   
let palabraUnida1 = palabraOrdenada1.join();
let palabraUnida2 = palabraOrdenada2.join();

    if(palabraUnida1 === palabraUnida2){
        console.log("Es un anagrama") 
    }else{
        console.log("No es un anagrama") 
    }



//.toLowerCase()

