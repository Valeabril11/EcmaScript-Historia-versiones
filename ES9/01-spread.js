console.log('----CLASE 22 || ES9 / Expresiones regulares------');
//spread operator para objetos

const user ={username: 'Vale', age:'27', country: 'Arg', FavoriteNumber:'11',}

const {username, ...values} = user;
console.log(user);
console.log(username);
console.log(values);