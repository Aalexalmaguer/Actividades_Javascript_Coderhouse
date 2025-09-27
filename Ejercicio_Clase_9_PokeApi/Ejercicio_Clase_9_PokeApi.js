// Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y protocolos que permiten que diferentes aplicaciones se comuniquen entre sí.
// El metodo fetch es una función integrada en JavaScript que permite realizar solicitudes HTTP asincrónicas a servidores web para obtener recursos, como datos JSON, imágenes o archivos.

//Para tratar la promesa usamos async/await
async function obtenerListaPokemons() {
    // Con el fetch reemplazamos la necesidad de hacer una promesa de manera manual
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=6") // Hacemos una solicitud a la API de Pokémon para obtener una lista de 6 Pokémon
    //Necesitamos convertir la respuesta a JSON
    //El await hace que la ejecución espere hasta que la promesa se resuelva
    const data = await response.json();
    
    return data.results; // Devolvemos la lista de Pokémon. Accedemos a la propiedad results del objeto data
}

//Construiamos la promesa y luego armabamos el proceso asincrono con async/await

async function mostrarCardsPokemon(){ //Va a estar a la espera de que se resuelva la promesa
    try {//La resolucion se da dentro del try.
        const pokemonList = await obtenerListaPokemons(); //Esperamos a que se resuelva la promesa y obtenemos la lista de Pokémon
        pokemonList.forEach((pokemon)=> {//Por cada pokemon pintaremos un objeto en pantalla. O mejor dicho una tarjeta.
            crearTarjetaPokemon(pokemon)//Diferencia entre parametro y argumento. El parametro es el que recibe la funcion, el argumento es el que se envia a la funcion.
        });
    } catch (error) {
        
    }
    
}

function crearTarjetaPokemon(pokemon) { //En la funcion primero debemos acceder al DIV que se identifica con el id de output
    const div = document.getElementById("output");//Con esto accedemos al div del HTML
    const tarjeta = document.createElement("div"); //Creamos un div que sera la tarjeta

    //Usamos innerHTML para insertar contenido HTML dentro del div tarjeta
    tarjeta.innerHTML = `
        <h4>${pokemon.name}</h4>
        <a target="blank" href="${pokemon.url}">Ver Detalles</a>
    `;
    //Usamos el metodo appendChild para agregar la tarjeta al div output
    div.appendChild(tarjeta);
}

mostrarCardsPokemon(); //Llamamos a la funcion para que se ejecute el proceso asincrono y se muestren las tarjetas de los pokemons


