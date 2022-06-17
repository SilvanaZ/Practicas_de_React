


const personajes = ['Ardan', 'Ilay', 'Caleb', 'Logan'];

//const [p1] = personajes;
//const [,  p2] = personajes;
/* Desestructurando el array personajes y asignando el tercer elemento a la variable p3. */
const [, , p3] = personajes;
console.log(p3);


const retornoArreglo = () => {
    return ['ABC', 123];
}

//const arr = retornoArreglo();
//console.log(arr)
const [letras, numeros] = retornoArreglo();
console.log(letras, numeros);

//Tarea
/*
1. valor de arr nombre
2. se llamara setNombre
*/

const useState = (valor) => {
    return [valor, () => { console.log('Hello world') }];
}

/* Llamar a la función useState y pasarle el valor 'Ilay'. */
const [nombre, setNombre] = useState('Ilay');
//arr[1]();

console.log(nombre);
setNombre();
