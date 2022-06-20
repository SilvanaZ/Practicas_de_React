/* import { getHeroeById } from "./src/01_intro_react/08-imp.exp-funciones";

const promesa = new Promise((resolve, reject) => {

    setTimeout(() => {
         console.log('2 segundo despues')
        resolve(heroe);
        reject(p1);
        const p1 = getHeroeById(2);
        console.log(heroe);
        resolve(p1);
    }, 2000)
});


promesa.then((heroe) => {
    console.log('heroe', heroe)
})
    .catch(err => console.warn(err)); */
import { getHeroeById } from "./src/01_intro_react/08-imp.exp-funciones";

const getHeroeByAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log('2 segundo despues')
            //resolve(heroe);
            //reject(p1);
            const p1 = getHeroeById(2);
            if (p1) {
                resolve(p1)
            } else {
                reject('No se encuentra el heroe')
            }
            //console.log(heroe);
            resolve(p1);
        }, 2000);
    });
};

getHeroeByAsync(4)
    .then(console.log)
    .catch(console.warn);

//??? catch???//
