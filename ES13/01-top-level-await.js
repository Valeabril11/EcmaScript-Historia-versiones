console.log('-----ES13 / CLASE 34 - ES13: top level await en el consumo de una API // TAMBIEN SE CREA  products.js')

// Top level await permite utilizar la palabra reservada await, sin estar dentro de una función asíncrona con async. Sin embargo, únicamente se puede utilizar await en la parte superior del archivo de un módulo.

// Cómo utilizar top level await
// Anterior a ECMAScript 13, cuando se introdujo funciones asíncronas, si utilizabas await fuera de async, existirá un error de sintáxis.

// Error
// await fetch(URL) --descomentar
// SyntaxError: await is only valid in async function
// Ahora, con top level await esto es posible, sin ningún error. Esto puede servir para importaciones de manera dinámica o iniciar la conexión de tus bases de datos. Siempre y cuando respetes que debe estar en la parte encima del archivo de tipo módulo.

// instalo la dependencia de node para poder usar fetch 'npm install node-fetch'

import { products } from './products.js';

//-------------
// import fetch from "node-fetch";

// const response = await fetch('https://api.escuelasjs.co/api/v1/products');
// //ahora lo voy a convertir en un json
// const products = await response.json();
//-----------

console.log(products);
console.log('Heyyyyy Vale!')
