let persona = {
    nombre: "davis",
    edad: 24,
    comidaFav: "Hamburguesa",
};

//acceder a propiedad de obj

let edad = persona.edad;
console.log(edad);

//edita propiedad acceder a la propiedad y darle nuevo dato
persona.edad = 24;

//agregar propiedad
//objeto mas nombre de nueva prop y valor
persona.juegoFav = 'tenis';

//borrar propiedad
delete persona.juegoFav;

//recorrer / iterar objeto
for (let key in persona) {
    console.log(key, persona[key]);
}

