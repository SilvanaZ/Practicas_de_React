//funciones

/*function saludar(nombre) {
    return `Hola, ${nombre}`;
}*/

/* const saludar = function (nombre) {
    return `Hola, ${nombre}`;
} */

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hello World`;

//console.log(saludar(`Pelufo`));
console.log(saludar2(`Ardan`));
console.log(saludar3(`Caleb`));
console.log(saludar4());



const getUser = () =>
({
    uid: 'ABC123',
    username: 'Sil_devop'
});

const user = getUser();
console.log(getUser())

//Tarea
//1. Transformar a una funcion de flecha
//2.Tiene que retornar un objeto implicito.
//3.Probar.

/*function getUsuarioActivo(nombre) {
    return {
        uid: 'Abc6445',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Silvana');
console.log(usuarioActivo); */

const getUsuarioActivo = () =>
({
    uid: 'Abc6445',
    username: 'Silvana_Developer'
});
const usuarioActivo = getUsuarioActivo();
console.log(getUsuarioActivo())
