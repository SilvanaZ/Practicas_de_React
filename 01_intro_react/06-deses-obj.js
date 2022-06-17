

//Desestructuración
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;


/*console.log(nombre);
console.log(edad);
console.log(clave); */

const useContext = ({ clave, nombre, edad, rango = 'Sargento' }) => {

    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 15.15156,
            lng: -17.4555
        }
    }
}

const { nombreClave, anios, lating } = useContext(persona);
//const { lat, lng } = lating;

console.log(nombreClave, anios);
console.log(lating);


