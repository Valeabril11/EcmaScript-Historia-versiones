console.log('--------------ES9 / clase 23 Promesas.finally')

// Las siguientes características de ES9 o ES2018 que aprenderás son: método finally para promesas y generadores asíncronos.

// Método finally en promesas
// El método finally para promesas consiste en ejecutar código después que una promesa haya sido ejecutada como resuelta o rechazada.

// Generadores asíncronos
// Los generados asíncronos son semejantes a los generadores que ya conoces, pero combinando sintáxis de promesas.

// Cómo utilizar for await
// De la misma manera, for await es un ciclo repetitivo que se maneja asíncronamente. El ciclo siempre debe estar dentro de una función con async.

// El valor es cada elemento del iterable puede tener cualquier nombre, por eso se inicia con let nombre.


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
  .catch(err => console.log('err: ' + err))
  .finally( () => console.log("Finalizado"))
  