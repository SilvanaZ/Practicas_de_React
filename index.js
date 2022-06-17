import { heroes } from '../data/heroes'

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

const getHeroebyId = (id) => heroes.find((heroe) => heroe.id === id);


console.log(getHeroebyId(2));

const getHeroebyOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroebyOwner('DC'));


