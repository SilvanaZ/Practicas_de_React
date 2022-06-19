const persona = {
    nombre: 'Damian',
    apellido: 'Stark',
    edad: '25',
    direccion: {
        ciudad: 'New York',
        zip: 21548488,
        tel: 154164848,
        ing: 34.1155452,
    }
};

//console.table(persona);
console.log(persona);
const persona2 = { ...persona };
persona2.nombre = 'Susan';


console.log(persona);
console.log(persona2)
