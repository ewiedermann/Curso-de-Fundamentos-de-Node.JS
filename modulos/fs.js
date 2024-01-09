//Viene en el proyecto node.js
const fs = require('fs');

//Se trabaja con async
//cb es el callback
function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        //toString es para convertir la lectura a la forma humna.
        console.log(data.toString);
    })
}

//Para leer el archivo
leer(__dirname + '/archivo.txt', console.log);

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function(error) {
        if (error) {
            console.error('No se puede escribir');
        } else {
            console.log('Se escibio el archivo');
        }
    });
}

//Para crear un archivo, escribir y leer. 
escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

borrar(__dirname + '/archivo1.txt', consol.log)