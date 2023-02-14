console.log('--ES12/ CLASE 31 - numeric-separators ---')


// La siguiente versión de ECMAScript fue publicada en 2021. Las siguientes características de ES12 o ES2021 que aprenderás son: separadores numéricos y método replaceAll para strings.

// Separadores numéricos
// Los separadores numéricos ayudan a la legibilidad de cantidades con varias cifras. Se utiliza el caracter guion bajo ( _ ) para separar las cifras, y no afecta a la ejecución del programa.

// Lo ideal es separar cada 3 cifras, para visualizar los miles, millones, billones, etc.

// 🔽 Baja legibilidad
const numero1 = 3501548945
console.log( numero1 ) // 3501548945

// ✅ Alta legibilidad
const numero2 = 3_501_548_945
console.log( numero1 ) // 3501548945
// De esta manera puedes identificar el número rápidamente.

