//Manejo de async

function soyAsincrona(micallback) {
    console.log("Hola, soy una función asíncrona");
    setTimeout(function() {
        console.log("Estoy haciendo una async")
        micallback();
    }, 1000);
}

//Ejecuto asincrona
console.log('Iniciando proceso...');
soyAsincrona(function() {
    console.log('Terminado el proceso...');
});


//Esto no es una función asincrona, porque no se ejecuta sola.

//Se puede pasar como un parámetro, con el callback lo que hago un iniciar el que quiero yo

//Otra forma
function hola(nombre, micallback) {
    setTimeout(function() {
        console.log("Hola, " + nombre);
        micallback();
    }, 1000);
}

//Pero con el adios
function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Hola, " + nombre);
        otroCallback();
    }, 1000);
}

//Sino pongo el parametro que espera la función hola, no se ejecuta.
console.log('Iniciando proceso...');
hola('Exquiel', function() {
    adios('Carlos', function() {
        console.log('Terminado el proceso...');
    });
});

//Sin el callback, se ejecuta por separado. 
//El callback da orden en las formas.