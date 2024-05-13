// let miArray = ['davis', 'carlos', 'rosa'];

// console.log(miArray);

// miArray.push('Carlos');
// console.log(miArray);
// //imprime ['davis', 'carlos', 'rosa', 'carlos];

// miArray.unshift('augustin');
// console.log(miArray);
// //agrega elemento al principio
// //imprime ['augustin', 'davis', 'carlos', 'rosa', 'carlos];

// // let eleFInal = miArray.pop();
// // //remueve el ultimo elemento
// // console.log(miArray);
// // console.log(eleFInal);

// miArray.shift();
// console.log(miArray);

//recorrer / iterar

let miArray = ['davis', 'carlos', 'rosa'];

for (let i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
}

miArray.forEach((elemento) => {
    console.log(elemento);
});
