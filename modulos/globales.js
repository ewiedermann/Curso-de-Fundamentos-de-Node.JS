//Son modulos que ya vienen en node.js
//Los clásicos son console por ejemplo.

//No se deben de usar en proyectos en producción.
//Para ver los globales
console.log(global);
console.log(setInterval);

//Esto sirve mucho para la base de datos, 
//Si la base de datos se corto la conexión te da un aviso.
let i = 0;
let intervalo = setInterval(function() {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo)
    }
    i++;
}, 1000);

//
setImmediate(function() {
    console.log("Soy inmediato");
});

//modules
//export
//requiere

//Procesos, son para las variables de entorno.
console.log(process);

//lugar donde estamos.
console.log(__dirname);

//Nombre del archivo.
console.log(__filename);