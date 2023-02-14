console.log('--ES12/ CLASE 32 - mejoras en las promesas ---')



const promise1 = new Promise ((resolve, reject)=> reject('Reject'));
const promise2 = new Promise ((resolve, reject)=> resolve('resolve1'));
const promise3 = new Promise ((resolve, reject)=> reject('Reject  2'));
const promise4 = new Promise ((resolve, reject)=> resolve('resolve2'));
const promise5 = new Promise ((resolve, reject)=> resolve('resolve3'));
const promise6 = new Promise ((resolve, reject)=> resolve('resolve4'));

Promise.any([promise1, promise2, promise3])
.then(Response => console.log(Response))

// nos devuelve la primer promesa que nos regresa lo esperado, en este caso me muestra la primera que cumple con el objetivo de response