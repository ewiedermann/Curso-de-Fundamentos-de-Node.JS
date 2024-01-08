//Ayuda memoria de monohilo
//PROCESO DE NODE

//    1.- Va a abrirse un proceso, ese proceso es un proceso de node
//    2.- Interpreta todo el archivo
//    3.- Convertirlo a código maquina
//    4.- Prepara todo lo que necesita para ejecutarse
//    5.- Se ejecuta
//    6.- Se cierra el proceso, y termina

//DESVENTAJAS MONOHILO

//    - Si no se manejan bien los errores y uno truena, ya no continua con los procesos posteriores
//    - Debes estar pendiente de todo el código

//Acá lo que esta sucediendo, es que se crea un proceso de node
//Va a ejecutar, prengutando todo lo que necesita. 

console.log('Hola mundo');

//Acá se activa cada un segundo.
//setInterval es una forma de generar un bucle infinito.
setInterval(function() {
    console.log("Estoy en el setinterval");
}, 1000);

//Otra forma de hacer un for
let i = 0;
setInterval(function() {
    console.log(i);
    console.log("Estoy en el setinterval");
    i++
}, 1000);

//Otra forma de hacer un for, pero cuando se ejecuta un error
//Se para todo el proceso.
let j = 0;
setInterval(function() {
    console.log(j);
    console.log("Estoy en el setinterval");
    j++
    //Si comento esto, pasa a ser asincronico
    //Explicar eso en las clases.
    if (j === 5) {
        var a = 3 + z;
    }
}, 1000);

console.log('Segunda instrucción');