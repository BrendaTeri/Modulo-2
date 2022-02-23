//Manipulando js con JSON, Pasando un objeto de js a JSON
const deportista = `{"nombre": "Messi", "champions":4}`;

console.log(JSON.parse(deportista));

/* Fetch() = inicia el proceso de obtener un recurso de la red, 
devolviendo una promesa que se cumple una vez que la respuesta está disponible*/
fetch('./json.json')

//.then(), función que puede tomar dos argumentos, uno que tendrá éxito y para el otro, un error
    .then((response)=> response.json())
    .then((libro)=> {
        const nombreDELibro = libro.map((libro) => libro.nombre);
        console.log(nombreDELibro);
    });
