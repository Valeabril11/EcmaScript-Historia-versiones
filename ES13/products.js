console.log('-----ES13 / CLASE 34 - ES13: top level await en el consumo de una API // TAMBIEN SE CREA 01-TO-LEVESL-AWAIT.JS----------')

import fetch from "node-fetch";

const response = await fetch('https://api.escuelasjs.co/api/v1/products');
//ahora lo voy a convertir en un json
const products = await response.json();

export {products};