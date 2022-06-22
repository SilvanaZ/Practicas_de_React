

//const getImagenPromesa = () => new Promise(resolve => resolve('https://ajskdhajs.com'))
//getImagenPromesa().then(console.log);
const getImagen = async () => {

try {
    const apiKey = '5RuT6QkFuFdKbq9SpAPnx41O8asaxxUR';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement('img')
    img.src = url;

    document.body.append(img);
    
} catch (error) {

}

}

getImagen();


