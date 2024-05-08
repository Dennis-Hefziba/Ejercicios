const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
1 Escribe un programa que solicite al usuario su nombre y apellido por separado,
 y luego muestre un mensaje de saludo concatenando ambos.
*/

rl.question('Ingrese su nombre: ', (nombre) => {
    rl.question('Ingrese su apellido: ', (apellido) => {
        console.log(`Hola, su nombre es: ${nombre} ${apellido}`);
        
/*
2 Crea un programa que cuente el número de caracteres
 en una cadena ingresada por el usuario.
*/  

        rl.question('Ingrese una cadena de texto: ', (cadena) => {
            console.log(`Número de caracteres: `, cadena.length);

            /*
3 Escribe un programa que tome una cadena ingresada por el usuario
  y la muestre completamente en mayúsculas.
*/

            rl.question('Ingrese una palabra: ', (palabra) => {
                console.log(palabra.toUpperCase());
                
                rl.close(); // Cerrar la interfaz readline al finalizar
            });
        });
    });
});

/*
4. Crea un programa que tome una frase ingresada por el usuario
 y reemplace una palabra específica por otra.
*/

rl.question('Ingrese una frase a cambiar: ', (frase) => {
    rl.question('Ingrese la palabra que sea reemplazar: ', (palabraCambiar) => {
        rl.question('Ingrese la palabra nueva: ', (nuevaPalabra) => {
            const fraseModificada = frase.replace(new RegExp(palabraCambiar, 'gi'), nuevaPalabra)
            console.log('frase modificada: ', fraseModificada);

        })
    })
})

/*
5. Escribe un programa que tome una cadena ingresada
 por el usuario y extraiga una subcadena de ella.
*/

rl.question('Ingrese una cadena: ', (cadena) => {
    const inicio = 2;
    const longitud = 5;
    const subCadena = cadena.substring(inicio, inicio + longitud);
    console.log(`La subcadena es: ${subCadena}`);
    rl.close();
});

/*
6. Crea un programa que cuente el número de palabras
en una frase ingresada por el usuario.
*/

rl.question('Ingrese una frase: ', (frase) => {
    const palabras = frase.split(' ');
        console.log(`numero de palabras: ${palabras.length}`);
})

/*
7. Escribe un programa que tome una cadena ingresada por el usuario
 y la muestre invertida.
*/

rl.question('Ingrese una cadena: ', (cadena) => {
    const cadenaInvertida = cadena.split('').reverse().join('');
    console.log(`cadena invertida: ${cadenaInvertida}`);
})

/*
8. Crea un programa que verifique si una palabra ingresada
 por el usuario es un palíndromo (se lee igual de adelante hacia atrás).
*/

rl.question('Ingresa una palabra: ', (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');
    if (palabra === palabraInvertida) {
        console.log(`${palabraInvertida} es un palindromo`)
    } else {
        console.log(`${palabraInvertida} no es palindromo`)
    }
})

/*
9. Escribe un programa que cuente el número de vocales
 en una palabra ingresada por el usuario.
*/

rl.question('Ingrese una palabra: ', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numeroVocales = vocales ? vocales.length : 0;
    console.log(`el numero de vocales es: ${numeroVocales}`);
})

/*
10. Crea un programa que tome una frase ingresada por el usuario
 y capitalice la primera letra de cada palabra.
*/
//ctrl + k ctrl + u para comentar rapido

rl.question('IOngrese una frase: ', (frase) => {
    const palabras = frase.split(' ');
    const palabraCap = palabras.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    console.log(`frase capitalizada es: ${palabraCap}`);
})


