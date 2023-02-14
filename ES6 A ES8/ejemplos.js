console.log('lastName');

let fruit = 'fruta';
 
console.log(fruit)

fruit = 'otrafruta' 

console.log(fruit)

console.log('----------clase #5 | PLANTILLAS LITERALES-------------')

let hello = 'hello';
let world = 'WORLD!'

let frase = `${hello} ${world}`

console.log (frase)

console.log('----multilinea-----')

let lorem = `Esto es una frase
que discrimina 
los saltos de linea
siiiii!!!!`;

console.log (lorem)

console.log('----CLASE 6 || Default params(valores por defecto)------');

function sumar(number1, number2){
    var _number1 = number1 || 0
    var _number2 = number2 || 0
    
    return _number1 + _number2
  }
  
  console.log (sumar(3,4))
  console.log(sumar(3))
 console.log (sumar())  

 console.log ('---mejor práctica ----->')

 function sumar(_number1 =0, _number2=0){
   
    return _number1 + _number2
  }
  
  console.log (sumar(3,4))
  console.log(sumar(3))
 console.log (sumar())  

 
 console.log('----CLASE 7 || DESTRUCTURING------');

 let fruits = ['Apple', 'Banana']
 let [a, b] = fruits
 console.log(a, fruits[0]);

 console.log('otro')

 let user = {username: 'Valeria', age: '27', pasword: 'asd123', other: 'other others'}
 let {username, age} = user 
 console.log(username, age, user.pasword)
 console.log(user)

 console.log('----CLASE 8 || spredoperator, operador de propagacion------');

 let mostrar = {...user, id:'1'}

 console.log(mostrar)

 console.log('----CLASE 10 (la 9 fue un playground) || OBJETOS LITERALES------');
//Los objetos literales consiste en crear objetos a partir de variables sin repetir el nombre. Antes de ES6, para crear un objeto a partir de variables consistía en la siguiente manera:
const nombre = "Andres"
const edad = 23

const objeto = {
    nombre: nombre, 
    edad: edad
}
console.log ('objeto 1: ' )
console.log(objeto)
//----------------------------


const objeto2={
  name: 'Valeria',
  lastName: 'Molina'
}
console.log('objeto 2: ')
console.log(objeto2)
//----------------------------

let nombre1= 'Abril'
let apellido = 'Molina'

const objeto3 = {nombre1, apellido}

console.log('objeto 3: ')
console.log(objeto3)
//-----------------------------

console.log('----CLASE 11 || PROMESAS------');
//algo que va a pasar

const anotherFunction = () => {
  return new Promise ((resolve, reject)=>{
    if (false){
      resolve('Hey!! siii')
    }else{
      reject('Whoooooops!')
    }
  })

}

anotherFunction()
.then(response => console.log('response: ' + response))
.catch(err => console.log('err: ' + err));



console.log('----CLASE 12 || CLASES------');
// declaro la clase
class Users{
  //agrego los metodos de la clase
  greeting(){
    return 'Hello!';
  }
}; 
// a una clase la puedo declarar y luego instanciar heredando su contenido

const gndx = new Users(); // in stancio la clase
console.log(gndx.greeting())

// this hace referencia al elemento padre que lo contiene

class User {
  constructor(name, age){
    this.name = name
    this.age = age
  }
  speak(){
    return 'Hello!';
  }
  greeting(){
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge (n){
    this.age = n
  }
}
const vale = new User('Vale', 26);
console.log(vale.greeting())
console.log(vale.uAge)
console.log(vale.uAge=27)
console.log('----CLASE 13 || MODULOS------');

//EN ESTA CLASE SE APRENDE QUE PARA TRABAJAR CON MODULOS DEBO PONERLO EN EL PACKAGE.JSON y de esa manera puedo importar y exportar modulos

console.log('----CLASE 15 || GENERATORS------');

//Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

// Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

// Cómo utilizar generadores
// La sintaxis de los generadores comprende lo siguiente:

// La palabra reservada function* (con el asterisco al final).
// La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
// Crear una variable a partir de la función generadora.
// El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.
// Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true.

function* iterate (array){
  for(let value of array){

    yield value;
  }
}
const it = iterate(['Valeria', 'Abril','Molina','Alvarez', 'Valeria'])
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

// o si quiero generar una funcion que me vaya agregando id a medida que registro uno nuevo ->
function* getId() {
  let id = 1
  while (true) {
    yield id++
    console.log ('entré')
 }}

 const it1 = getId (1,2,3,4,5,6)
 console.log(it1.next().value)
 console.log(it1.next().value)
 console.log(it1.next().value)
 console.log(it1.next().value)
 console.log(it1.next().value)
 console.log(it1.next().value)

console.log('----CLASE 17 || SET Y ADD ------');

// Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

// Cómo utilizar los Sets
// Para iniciar un Set, se debe crear una instancia de su clase a partir de un iterable. Generalmente, un iterable es un array.
// Cómo manipular los Sets
// Para manipular estas estructuras de datos, existen los siguientes métodos:

// add(value): añade un nuevo valor.
// delete(value): elimina un elemento que contiene el Set, retorna un booleano si existía o no el valor.
// has(value): retorna un booleano si existe o no el valor dentro del Set.
// clear(value): elimina todos los valores del Set.
// size: retorna la cantidad de elementos del Set.
// Contribución creada por Andrés Guano (Platzi Contributor).

const list = new Set();

list.add('item 1');
list.add('item 2');
list.add('item 3');

let size = list.size

console.log(list);
console.log('el size es: '+ size)

console.log('----CLASE 18 || ES7 / exponentiation operator y array includes------');

// La siguiente versión de ECMAScript fue publicada en 2016. Las siguientes características de ES7 o ES2016 que aprenderás son: el método includes de arrays y el operador de potenciación.

// Operador de potenciación
// El operador de potenciación (exponential operator) consiste en elevar una base a un exponente utilizando el doble asterisco (**).

// base ** exponente

// Por ejemplo, el cubo de 2 es igual a 8, matemáticamente expresado sería: $2^3=8$.

const data = 3**4
console.log(data)


// ----------------------------
// Método includes
// El método includes determina si un array o string incluye un determinado elemento. Devuelve true o false, si existe o no respectivamente.

// Este método recibe dos argumentos:

// El elemento a comparar.
// El índice inicial desde donde comparar hasta el último elemento.

let numbers = [1,2,3,4,5,6,7]

console.log(numbers.includes(1))
console.log(numbers.includes(10))
console.log(numbers.includes(8))

let list1 =['vale', 'valeria', 'agus', 'agustin']

console.log(list1.includes('vale'))
console.log(list1.includes('Vale'))

// ----------------------------

// Índices positivos y negativos
// Los índices positivos comienzan desde 0 hasta la longitud total menos uno, de izquierda a derecha del array.
// Los índices negativos comienzan desde -1 hasta el negativo de la longitud total del array, de derecha a izquierda.

console.log('----CLASE 19 || ES8 / object entries y object values------');

// Los métodos de transformación de objetos a arrays sirven para obtener la información de las propiedades, sus valores o ambas.

// Obtener los pares de valor de un objeto en un array
// Object.entries() devuelve un array con las entries en forma [propiedad, valor] del objeto enviado como argumento.

const usuario = {
  name: "Andres",
  email: "andres@correo.com",
  age: 23
}

console.log(Object.entries(usuario)) 

// Obtener las propiedades de un objeto en un array
// Object.keys() devuelve un array con las propiedades (keys) del objeto enviado como argumento.

const usuario2 = {
  name: "Andres",
  email: "andres@correo.com",
  age: 23
}

console.log('usuario2 essss: ' + Object.keys(usuario2))
//interesante, corre esto:
console.log(Object.keys('hola'+usuario2))
console.log(Object.keys('Holaa'+usuario2))

// Obtener los valores de un objeto en un array
// Object.values() devuelve un array con los valores de cada propiedad del objeto enviado como argumento.

const usuario3 = {
  name: 'Andres',
  email: "andres@correo.com",
  age: 23
}

console.log('usuario3' + Object.values(usuario3))

//------------------------------------------------------

console.log('----CLASE 20 || ES8 / string padding y trailing commas------');

// Las siguientes características de ES8 o ES2017 que aprenderás son: rellenar un string y trailing commas.

// Rellenar un string o padding
// El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.

// Este método recibe dos argumentos:

// La longitud máxima a rellenar, incluyendo el string inicial.
// El string para rellenar, por defecto, es un espacio.
// Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

// Método padStart
// El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.

'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"

//------------------------

// Método padEnd
// El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.

console.log('abc'.padEnd(10)) // "abc       "
console.log('abc'.padEnd(10, "foo")) // "abcfoofoof"
console.log('abc'.padEnd(6, "123456")) // "abc123"
console.log('abc'.padEnd(1)) // "abc"

// Trailing commas
// Las trailing commas consisten en comas al final de objetos o arrays que faciliten añadir nuevos elementos y evitar errores de sintaxis.

const usuario4 = {
  name: 'Andres',
  email: "andres@correo.com",
  age: 23, //<-- Trailing comma
}

const nombres = [
  "Andres",
  "Valeria",
  "Jhesly",
  ,
  ,
  , //<-- Trailing comma
]

console.log('nombres es' + nombres)

console.log('usuario4 es: '+ usuario4)

console.log('----CLASE 21 || ES8 / funciones asincronas------');

// usamos async / await-> para crear la promesa y try catch para manejar la respuesta, si fue resuelta o no

const fnAsync = () =>{
  return new Promise((resolve, reject)=>{
    (true) //es como si fuera UN if
    ? setTimeout(()=>resolve('AsynC!!!'),2000)
    : reject(new Error('Errooor!'));
  })
}


const anotherFn = async ()=>{
  const something = await fnAsync();
  console.log(something);
  console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');

console.log('----CLASE 22 || ES9 / funciones asincronas------');
