// /*
// 1. Crea una función que reciba un arreglo de cadenas de
//  texto y cuente cuántas veces aparece cada palabra en todas las cadenas.
// */

// function contarPalabras(array) {
//     let contadorPalabras = {};
//     array.forEach(cadena => {
//         let palabras = cadena.split(/\s+/)
//         palabras.forEach(palabra => {
//             if(contadorPalabras[palabra]) {
//                 contadorPalabras[palabra]++;
//             } else {
//                 contadorPalabras[palabra] = 1; // Inicializa el contador en 1 si la palabra no existe aún
//             }
//         })
//     });
//     return contadorPalabras; 
// }

// let array = ['Hola como estas', 'Espero que bien'];
// let contar = contarPalabras(array);
// console.log(contar);



//ejercicio 2
/*
Define un objeto que represente un producto con propiedades como nombre, 
precio y cantidad. Luego, calcula el costo total multiplicando el precio
 por la cantidad para varios productos y sumando los resultados.
*/

// let productoA ={
//     nombre: "camisa",
//     precio: 25,
//     cantidad: 5,
// };
// let productoB ={
//     nombre: "Jeans",
//     precio: 40,
//     cantidad: 3,
// };

// let costoTotalProductoA = productoA.precio * productoA.cantidad;
// let costoTotalProductoB = productoB.precio * productoB.cantidad;

// let costoTotal = costoTotalProductoA + costoTotalProductoB;
// console.log(costoTotalProductoA);
// console.log(costoTotalProductoB);
// console.log("Total: $" + costoTotal);


//ejercicio 3
/*
Toma un arreglo de objetos que representen personas con propiedades como 
nombre, edad y ciudad, y filtra las personas mayores de 30 años que viven
 en una ciudad específica.
*/

//Array de objetos
// let personas = [
//     {nombre:"Sergio", edad: 33, ciudad: "San Salvador"},
//     {nombre:"Marta", edad: 35, ciudad: "San Salvador"},
//     {nombre:"Marleny", edad: 50, ciudad: "Santa Tecla"},
//     {nombre:"Sonia", edad: 25, ciudad: "San Miguel"},
// ]

// function filtrarPersonas(personasArreglo, ciudad) {
//     return personasArreglo.filter(persona => persona.edad > 30 && persona.ciudad === ciudad)
// }

// let personasFiltradas = filtrarPersonas(personas, "San Salvador");
// console.log(personasFiltradas);

//ejercicio 4

/*
Dado un arreglo de números, crea una nueva lista con los cuadrados
de cada número utilizando el método map().
*/
// let numeros = [2,5,6,9,12];

// let cuadradosnewarray = numeros.map(numero => numero**2);
// console.log(cuadradosnewarray);

// ejercicio 5
/*
Toma un arreglo de números y utiliza una iteración para sumar únicamente
 los números pares.
*/
// let arreglo = [1,2,3,4,5,6,7,8,9,10];
// let sumaPares = 0;

// for(let i = 0; i < arreglo.length; i++) {
//     if(arreglo[i] % 2 === 0) {
//         sumaPares += arreglo[i];
//     }
// }

// console.log(sumaPares);

//Ejercicio 6
/*
Crea una función que reciba un arreglo de objetos con propiedades como
 nombre, edad y género, y busque un objeto específico por nombre.
*/

// let personas = [
//     {nombre:"Sergio", edad: 33, ciudad: "San Salvador"},
//         {nombre:"Marta", edad: 35, ciudad: "San Salvador"},
//         {nombre:"Marleny", edad: 50, ciudad: "Santa Tecla"},
//         {nombre:"Sonia", edad: 25, ciudad: "San Miguel"},
// ];

// function buscarPorNombre(arraypersona, nombre) {
//     return arraypersona.find(objero => objero.nombre === nombre)
// }

// let personaBuscada = buscarPorNombre(personas, "Marta");
// console.log(personaBuscada);

//ejercicio 7
/*
Ordena un arreglo de objetos según una propiedad específica, 
como la edad o el precio.
*/

// const peope = [
//     {
//         name: "Sponge bob",
//         age: 30,
//         gpa: 3.0,
//         precio: 100.0,
//     },
//     {
//         name: "Patrick",
//         age: 37,
//         gpa: 1.5,
//         precio: 300.50,
//     },
//     {
//         name: "Squidward",
//         age: 12,
//         gpa: 2.5,
//         precio: 12.23,
//     },
//     {
//         name: "Sandy",
//         age: 27,
//         gpa: 4.0,
//         precio: 10,
//     },
// ];

// function ordenar(peope) {
//     let resultado = peope.sort((a, b) => a.age - b.age);
//     return resultado;
// }  

// peope.sort((a, b) => a.precio - b.precio); //de menor a mayor
// peope.sort((a, b) => b.name - a.name); //de mayor a menor
// console.log(peope);

//ejercicio 8
/*
Crea una función que valide si un objeto tiene todas las propiedades
 requeridas, como nombre, dirección y teléfono.
*/
// let objeto = {
//         direccion: "Sersa prosa xd",
//         telefono: 73231243,
//     };

// function validarObjeto(obj) {
//    const propiedades = ['nombre', 'direccion', 'telefono'];
//         for(propiedad of propiedades) {
//             if (!obj.hasOwnProperty(propiedad) || !obj[propiedad]) {
//                 return false;
//             }
//         }

//         return true;
// }

// let resultado = validarObjeto(objeto);
// console.log(resultado);

//ejercicio 9
/*
Dado un objeto que representa una lista de compras con elementos y cantidades,
 genera una lista legible para el usuario mostrando cada elemento y su cantidad.
*/
// let objetoCompras = {
//     manzana: 5,
//     peras: 23,
//     guineos: 1,
//     atun: 3,
// };

// function generarListaLegible(lista) {
//     let listaLegible = "Lista de compras\n";

//     for (let item in lista) {
//         listaLegible = listaLegible + ` - ${item}: ${lista[item]}\n`;
//     }

//     return listaLegible;
// }

// let listaFinal = generarListaLegible(objetoCompras);
// console.log(listaFinal);

//ejercicio 10

/*
Toma dos arreglos de objetos que representen listas de 
estudiantes y profesores, y crea una nueva lista combinada
 con todos los miembros de la comunidad educativa
*/

let listaEstudiantes = [
    { nombre: "Luis", escuela: "La Libertad", codigo: 1234 },
    { nombre: "Mario", escuela: "San Matias", codigo: 12345 }
];

let listaProfesores = [
    { nombre: "Juan", escuela: "La Libertad", codigo: 6789 },
    { nombre: "Meme", escuela: "San Matias", codigo: 67890 }
];

function listaCombinada(listaEstudiantes, listaProfesores) {
    let listaMixta = listaEstudiantes.concat(listaProfesores);
//o tambien let listaMixta = [...listaEstudiantes, ...listaProfesores];
    return listaMixta;
}

function ordenAlfabetico(listaCombinada) {
    return listaCombinada.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
    
}

let resultado = listaCombinada(listaEstudiantes, listaProfesores);
console.log(resultado);

let resultadoOrdenado = ordenAlfabetico(resultado);
console.log(resultadoOrdenado);
















