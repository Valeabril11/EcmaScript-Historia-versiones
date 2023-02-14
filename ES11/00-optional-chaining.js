console.log('-------ES11 / CLASE 26 - ES11: OPTIONAL CHAINING-------- ')
//Esto nos ayuda a validar y que no se nos rompa el codigo

const users = {
    otro:{
        countri: 'ARG'
    },
    otro1:{
        country: 'MX'
    },
    otro2:{
        country: 'CO'
    }
}

console.log(users.otro1.country);
console.log(users.otro1.age);

console.log(users?.otro3?.country); // con esto valido y me entrega un undefined