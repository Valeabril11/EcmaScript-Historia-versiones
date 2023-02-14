//nos devuelve una matriz de cualquier submatriz

console.log('-------ES10 / CLASE 24 - ES10: flat-map -------- ')

const array =[1,2,3,4, [,11,22,33,44,[111,222,333,444]]];

console.log(array.flat(3)); // aplana el resultado en una siola matriz

const array1 =[1,2,3,4,5,6,7,8,9];
console.log(array1.flatMap(v =>[v, v*2]))