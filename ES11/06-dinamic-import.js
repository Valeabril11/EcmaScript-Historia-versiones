console.log('--ES11/ CLASE 30 DYNAMIC IMPORT --- TAMBIEN SE CREA EL module.js e index.html---')

const button = document.getElementById('btn'); // este es un listener que escucha cuando alguien hace click en el boton

button.addEventListener('click', async function(){
    const module = await import ('./module.js')
    console.log(module)
    module.hello()
})