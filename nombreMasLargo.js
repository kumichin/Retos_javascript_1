
/*
La función longestName()toma una matriz de nombres y devuelve el más largo.
Si hay un empate, devuelve el primer nombre con la longitud más larga.
Sin embargo, esta implementación está llena de errores.
Utilice sus habilidades de depuración para encontrar y corregir esos errores.
*/

function longestName(names) {

    if (names.length === 0) {
       return null; // o algún valor predeterminado
     }
        // Set the first name to be the longest
        let currentLongest = names[0];

        // Check each other name in the array starting from the second
        for (let i = 1 ; i < names.length ; i++) {

            // If the name we're checking is longer than our
            // current longest, set that name to be the new longest
            if (names[i].length > currentLongest.length) {
                currentLongest = names[i];
            }

        }

        return currentLongest;
    }


    testNames = ["James", "Patricia", "Michael", "Elizabeth", "Christopher",
                 "Sarah", "Margaret", "Kenneth", "Stephanie", "Jonathan",
                 "Jeremy", "Samantha", "Alexander", "Catherine", "Benjamin"]

    console.log(longestName(testNames)); // "Christopher"
