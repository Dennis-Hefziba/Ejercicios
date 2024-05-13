// function Persona(nombre, edad, esEstudiante) {
//     this._nombre = nombre;
//     this._edad = edad;
//     this._esEstudiante = esEstudiante;
// }

// const persona1 = new Persona('Juan', 30, true);
// console.log(persona1);

// object create - no se necesita constructor

// const persona = {
//     nombre: '',
//     edad: 0,
//     esEstudainte: false
// };

// const persona1 = Object.create(persona);
// const persona2 = Object.create(persona);

// persona1.nombre = 'felix';
// persona1.edad = 30;

// persona2.nombre = 'Juan';
// persona2.edad = 25;

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona2.nombre);
// console.log(persona2.edad);

//Objeto de clases - necesita constructor, metodos, objetos y clase

// class Persona{
//     constructor(nombre, edad, telefono) {
//         this._nombre = nombre;
//         this._edad = edad;
//         this._telefono = telefono;
//     }

//     //metodos
//     presentacion() {
//         return console.log(`hola mi nombre es: ${this._nombre} tengo la edad de ${this._edad} y mi telefono es: ${this._telefono}`);
//     }

//     hablarIdioma() {
//         return console.log(`Hola soy ${this._nombre} y hablo espanol`);
//     }
// }

// let persona1 = new Persona('Oscar', 27, 78373423);
// let persona2 = new Persona('Melany', 25, 78373423);
// persona1.presentacion();
// persona1.hablarIdioma();

// persona2.presentacion();
// persona2.hablarIdioma();

