// class Persona{
//     constructor(nombre, edad) {
//         this._nombre = nombre;
//         this._edad = edad;
//     }

//     //metodos
//     Llorar() {
//         return console.log(`Soy ${this._nombre} de ${this._edad} meses y estoy llorando`);
//     }

//     Dormir() {
//         return console.log(`Soy ${this._nombre} de ${this._edad} meses y estoy durmiendo`);
//     }

//     Comer() {
//         return console.log(`Soy ${this._nombre} de ${this._edad} meses y estoy comiendo`);
//     }

// }

// let persona1 = new Persona('Antonio', 3);
// let persona2 = new Persona('Sonia', 5);
// let persona3 = new Persona('Javier', 8);

// console.log('****************')
// persona1.Llorar();
// persona1.Dormir();
// persona1.Comer();
// console.log('****************')
// persona2.Llorar();
// persona2.Dormir();
// persona2.Comer();
// console.log('****************')
// persona3.Llorar();
// persona3.Dormir();
// persona3.Comer();


//Ejercicio 2

// let horaActual = new Date();

// let hora = horaActual.getHours();
// let minutos = horaActual.getMinutes();
// let segundos = horaActual.getSeconds();

// let resultado = `Son las ${hora} y ${minutos} con ${segundos} segundos`;
// console.log(resultado);

//Ejercicio 3

// class Hombre{
//     constructor(nombre, peso, altura) {
//         this._nombre = nombre;
//         this._peso = peso;
//         this._altura = altura;
//     }

// calcularIMC() {
//     //Para pasarlo a centimetros
//     let alturaEnMetros = this._altura / 100;
//     let imc = this._peso / (alturaEnMetros * alturaEnMetros);
//     return imc;
// }

//     mostrar() {
//         let imc = this.calcularIMC();
//         return console.log(`${this._nombre} su imc es: ${imc}`);
//     }
// }

// let persona1 = new Hombre('Fernando', 120, 170);
// persona1.mostrar();
