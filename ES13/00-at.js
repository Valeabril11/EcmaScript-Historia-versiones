console.log('-------ES11 / CLASE 33 - at (muy usado para paginar)--------')


// El método at de arrays sirve para acceder a los elementos a partir del índice.

// array.at(índice)

// Índices positivos y negativos en arrays
// Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array. El índice 0 es la primera posición.

// [0,1,2,3, ...., lenght-1]
// Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda. El índice -1 es la última posición.

// [-lenght, ...,  -3, -2, -1]
// Cómo utilizar el método at
// La utilidad más importante de este método es para manejar índices negativos. Algo que no se puede con la notación de corchetes.

const nombres = ["Andres", "Valeria", "Ana", "Ramiro", "Richard"]

console.log(nombres.at(-1)) // "Richard"
console.log(nombres[-1]) // undefined
console.log(nombres.at(-4)) // "Ana"
console.log(nombres[nombres.length -1]) // "Richard"

// Puedes utilizar la notación de corchetes, pero necesitas obtener la longitud del array y restarle una unidad, generando mucho código que puede volverse difícil de leer.

console.log(nombres[nombres.length -1]) // "Richard"