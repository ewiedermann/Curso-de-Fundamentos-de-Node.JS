//Hablar de promises
//Explicar las promesas con la clase 9
//Da el estado la promesa
function hola(nombre) {
    //Resolve da el resultado
    //Reject rechaza la pregunta.
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla Bla Bla Bla");
            resolve(nombre);
        }, 1500);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios, " + nombre);
            resolve(nombre);
        }, 1500);
    })
}

//Como llamo a función con promise
console.log('Iniciando el proceso');
hola('Carlos')
    //Primera opción
    //.then(nombre => {
    //    return adios(nombre);
    //})
    //Segunda opción
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminando el proceso');
    })
    //Si alguna función da error, se pasa al catch.
    .catch(error => {
        console.error('Ha habido un error:');
        console.error(error);
    })