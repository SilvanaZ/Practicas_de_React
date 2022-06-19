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
import { heroes, owners } from './src/data';

console.log(owners);


const getHeroebyId = (id) => heroes.find((heroe) => heroe.id === id);


console.log(getHeroebyId(2));

const getHeroebyOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroebyOwner('Marvel'));


