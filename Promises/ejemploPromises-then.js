//Ejemplo utilizando solamente then()
const promesaNueva = new Promise( (resolved, rejected) => {
//Declaramos el ejemplo como si se cumpliera lo que pedimos.
    const expresion = true;
    if(expresion){
        // Definimos la promesa
        resolved( 'Resolvió correctamente' );
//En caso que ocurrió un error y no se resolvió la petición anterior
    } else {
        rejected( 'Se produjo un error' );
    }
});

//Mandamos a llamar a la promesa para ejecutarla
promesaNueva.then(
    //Parámetros de la función then(), utilizando cb.
    valor => console.log(valor), 
//Si ocurre un error se ejecuta este código.
    error => console.log(error)
);