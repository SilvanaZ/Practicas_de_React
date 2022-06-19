/*console.log(heroes)

const getHeroebyId = (id) => {
    return heroes.find((heroe) => {
        if(heroe.id === id){
                      return (true)
}else{
    return false;
}
});
} */
/* Importación de la matriz de héroes del archivo heroes.js. */
import { heroes } from './src/data/heroes.js';

//console.log(owners);

export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeById(2));

export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroeByOwner('Marvel'));


