console.log('----CLASE 22 || ES9 / Expresiones regulares------');

// a continuacion haremos un manejador de fechas que admita 4 caracteres, 2 y 2
    const regex = /(\d{4})-(\d{2})-(\d{2})/
    const matchers = regex.exec('2022-01-01')
    console.log(matchers)

    const regex1 = /(\[0-9]{4})-(\[0-9]{2})-(\[0-9]{2})/
    const matchers1 = regex1.exec('2022-01-01')
    console.log(matchers1)