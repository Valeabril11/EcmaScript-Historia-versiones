console.log('----------ES10/CLASE 25 - try-catch')

//PODEMOS MANEJAR DE MANERA OPCIONAL EL MAJENO DE ERRORES DENTRO DEL CATCH

try{
    hello();
}catch(error){
    console.log(error);
}

// aca la consola muestra una serie de errores


try{
    another();
}catch{
    console.log('esto es un error, pero lo ideal es manejar el error, no este forzado');
}

//aca la consola me muetsra el console.log que yo le puse adentro, pero si hago esto no se que esta pasando, solo se que entro en el catch

