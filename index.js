import { getHeroeById } from "./src/01_intro_react/08-imp.exp-funciones";

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        /* console.log('2 segundo despues') */
        resolve(heroe);
        const heroe = getHeroeById(2);
        /* console.log(heroe); */
    }, 2000)
});



promesa.then((heroe) => {
    console.log('heroe')
})

//Tarea importar getHeroeById


