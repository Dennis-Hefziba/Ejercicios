// const readline = require('readline'); // Corrección en la declaración

// const { rejects } = require("assert");
// const { resolve } = require("path");

// function saludar(nombre) {
//     console.log("Hola " + nombre + "!"); // Añadimos algo para imprimir al saludar
// }

// function procesarEntradaUsuario(callback) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question("Ingrese un nombre: ", (nombre) => { // Corrección en el prompt
//         callback(nombre);
//         rl.close();
//     });
// }

// // Usamos la función procesarEntradaUsuario para leer el nombre y luego saludar
// procesarEntradaUsuario(saludar);

//ejercicio 1
// function saludar(nombre, callback) { //estructuro la llamada
//     const saludo = `Hola, ${nombre}`
//     callback(saludo)
// }

// function mostrar(saludo) { // aqui la imprimo 
//     console.log(saludo)
// }

// saludar("William", mostrar) //y aqui la mando a pedir

//ejercicio 2 promesa

    // function multiplicarPromise(a, b) {  
    //     return new Promise((resolve, reject) => {
    //         const resultado = a*b

    //         if (isNaN(resultado)) {
    //             reject("Error no hay argumentos")
    //         } else {
    //             resolve("Resuelto")
    //         }

    //     })
    // }

    // multiplicarPromise(2, "e")
    // .then((resultado) => {
    //     console.log(resultado)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    //ejercicio 3

    // function multiplicar(a, b, callback) {
    //     const resultado = a*b
    //     callback(resultado)
    // }

    // multiplicar(6, 3, (resultado) => {
    //     console.log("resultado: ", resultado)
    // })

    //ejercicio 4

    // function retrasarPromesa(ms) {
    //     return new Promise((resolve) => { // Corrección aquí, debe ser (resolve) =>
    //         setTimeout(() => {
    //             resolve(`La promesa se ha resuelto en ${ms} milisegundos`);
    //         }, ms);
    //     });
    // }
    
    // retrasarPromesa(2000)
    //     .then((mensaje) => {
    //         console.log(mensaje);
    //     });

    //ejericicio 5

    // Programacion asincrona, nadie hace click en nada, por medio de tiempo se ejecutan
    // function operacionAsincrona(callback) {
    //     setTimeout(() => {
    //         callback("Operacion asincrona completada")

    //     }, 8000)
    // }

    // operacionAsincrona((mensaje) => {
    //     console.log(mensaje)
    // })

    //ejercicio 6

    // function paso1() {
    //     return new Promise((resolve) => {
    //         console.log("Paso 1 funcionando")
    //         setTimeout(() => {
    //             resolve(5)
    //         }, 5000)
    //     })
    // }

    // function paso2(num) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(num * 2)
    //             console.log("Paso 2 funcionando")
    //         }, 5000)
    //     })
    // }

    // function paso3(num) {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(num + 2)
    //             console.log("Paso 3 funcionando")
    //         }, 5000)
    //     })
    // }

    // function paso4(num) {
        
    // }

    // paso1()
    // .then(paso2)
    // .then(paso3)
    // .then((resultado) => {
    //     console.log("El resultado es: ", resultado)
    // })

    //ejercicio 7

    // function dividir(a, b, callback) {
    //     if(b === 0) {
    //         callback("Error: el divisor es cero")
    //     } else {
    //         const resultado = a/b
    //         callback(null, resultado)
    //     }
    // }

    // dividir(10, 5, (error, resultado) => {
    //     if (error) {
    //         console.error(error)
    //     } else {
    //         console.log("El resultado es: ", resultado)
    //     }
    // })

    //ejercicio 8 editar el 7 uusando promesa

    // function dividir(a, b, callback) {
    //     return new Promise((resolve, reject) => {
    //         if(b === 0) {
    //             reject("Error: el divisor es cero")
    //         } else {
    //             const resultado = a/b
    //             resolve(resultado)
    //         }
    //     })
        
    // }

    // dividir(10, 3).then((resultado) => {
    //     console.log("El resultado es: ", resultado)
    // })
    // .catch((error) => {
    //     console.log(error)
    // })

    //ejercicio 9 en paralelo significa q se ejecutan todas

    // function tarea1 () {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("Tarea 1 completada")
    //         }, 3000)
    //     })
    // }

    // function tarea2 () {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("Tarea 2 completada")
    //         }, 3000)
    //     })
    // }

    // function tarea3 () {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("Tarea 3 completada")
    //         }, 3000)
    //     })
    // }

    // //promisee all es para mostrar todas las funciones promesas
    // Promise.all([tarea1(), tarea2(), tarea3()])
    // .then((resultado) => {
    //     console.log("Las tareas han finalizado: ")
    //     resultado.forEach((resultado) => {
    //         console.log(resultado)
    //     })
    // })
    // .catch((error) => {
    //     console.error("Error: ", error)
    // })

    //ejercicio 10

    function tarea1 () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Tarea 1 completada")
                }, 3000)
            })
        }
    
        function tarea2 () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Tarea 2 completada")
                }, 3000)
            })
        }
    
        function tarea3 () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("Tarea 3 completada")
                }, 3000)
            })
        }

      //  promisee all es para mostrar todas las funciones promesas
    Promise.all([tarea1(), tarea2(), tarea3()])
    .then((resultado) => {
        console.log("Las tareas han finalizado: ")
        resultado.forEach((resultado) => {
            console.log(resultado)
        })

        console.log("Accion final ejecutada")

    })
    .catch((error) => {
        console.error("Error: ", error)
    })
    