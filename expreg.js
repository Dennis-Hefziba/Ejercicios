
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero: ', (numero) => {
    console.log(`su numero es: ${numero}`);
})
