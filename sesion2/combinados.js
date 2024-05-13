const arrayDeObjetos = [
    {
        nombre: "david",
        edad: 34,
        comidaFavorita: "Hamburguesa",
    },
    {
        nombre: "Sally",
        edad: 22,
        comidaFavorita: "Shawarma",
    },
    {
        nombre: "Steven",
        edad: 18,
        comidaFavorita: "Pizza",
    },
];

for(let i = 0; i < arrayDeObjetos.length; i++) {
    console.log("Nombre: " + arrayDeObjetos[i].nombre);
    console.log("edad: " +arrayDeObjetos[i].edad);
    console.log("comida favorita: " +arrayDeObjetos[i].comidaFavorita);
}

const objetoConArray = {
    nombre : "Objeto con array",
    arr: ["abeja", "Perro", "zorra", "Gata"],
};

objetoConArray.arr.forEach(elemento => {
    console.log(elemento + "jajaja");
})