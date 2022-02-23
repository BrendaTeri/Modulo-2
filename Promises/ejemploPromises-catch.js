//Ejemplo utilizando solamente catch()
const promesaNueva = new Promise( (resolved, rejected) => {
    //Declaramos el ejemplo como si se cumpliera lo que pedimos.
        const expresion = false;
        if(expresion){
            // Definimos la promesa
            resolved( 'Resolvió correctamente' );
    //En caso que ocurrió un error y no se resolvió la petición anterior
        } else {
            rejected( 'Se produjo un error' );
        }
    });
    
//Mandamos a llamar a la promesa para ejecutarla  
promesaNueva
    .then( valor => console.log(valor) )
//Si ocurre un error lo podemos manejar con .catch().
    .catch( error => console.log(error) );