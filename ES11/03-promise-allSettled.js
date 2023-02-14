console.log('-------ES11 / CLASE 28 - Promise.allSettled--------')

const promise1 = new Promise ((resolve, reject)=> reject('Reject'));
const promise2 = new Promise ((resolve, reject)=> resolve('resolve'));
const promise3 = new Promise ((resolve, reject)=> reject('Reject  2'));

Promise.allSettled([promise1, promise2, promise3])

.then(response => console.log(response))