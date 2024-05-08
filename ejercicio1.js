const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('Ingrese su nombre: ', (nombre) => {
//     rl.question('Ingrese su apellido: ', (apellido) => {
//         console.log(`Hola, su nombre es: ${nombre} ${apellido}`);
        
//         rl.question('Ingrese una cadena de texto: ', (cadena) => {
//             console.log(`Número de caracteres: `, cadena.length);
            
//             rl.question('Ingrese una palabra: ', (palabra) => {
//                 console.log(palabra.toUpperCase());
                
//                 rl.close(); // Cerrar la interfaz readline al finalizar
//             });
//         });
//     });
// });

// rl.question('Ingrese una frase a cambiar: ', (frase) => {
//     rl.question('Ingrese la palabra que sea reemplazar: ', (palabraCambiar) => {
//         rl.question('Ingrese la palabra nueva: ', (nuevaPalabra) => {
//             const fraseModificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevaPalabra)
//             console.log('frase modificada: ', fraseModificada);

//         })
//     })
// })

// rl.question('Ingrese una cadena: ', (cadena) => {
//     const inicio = 2;
//     const longitud = 5;
//     const subCadena = cadena.substring(inicio, inicio + longitud);
//     console.log(`La subcadena es: ${subCadena}`);
//     rl.close();
// });

// rl.question('Ingrese una frase: ', (frase) => {
//     const palabras = frase.split(' ');
//         console.log(`numero de palabras: ${palabras.length}`);
// })

// rl.question('Ingrese una cadena: ', (cadena) => {
//     const cadenaInvertida = cadena.split('').reverse().join('');
//     console.log(`cadena invertida: ${cadenaInvertida}`);
// })

// rl.question('Ingresa una palabra: ', (palabra) => {
//     const palabraInvertida = palabra.split('').reverse().join('');
//     if (palabra === palabraInvertida) {
//         console.log(`${palabraInvertida} es un palindromo`)
//     } else {
//         console.log(`${palabraInvertida} no es palindromo`)
//     }
// })

// rl.question('Ingrese una palabra: ', (palabra) => {
//     const vocales = palabra.match(/[aeiou]/gi);
//     const numeroVocales = vocales ? vocales.length : 0;
//     console.log(`el numero de vocales es: ${numeroVocales}`);
// })

rl.question('IOngrese una frase: ', (frase) => {
    const palabras = frase.split(' ');
    const palabraCap = palabras.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    console.log(`frase capitalizada es: ${palabraCap}`);
})


