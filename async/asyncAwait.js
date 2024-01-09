//Async/Await es una forma de generar los callback y las promises 
//Sería una forma mejorada, dar el ejemplo de winnie pooh

//Solo poniendo async en las promises se convierte a async
async function hola(nombre) {
    //Resolve da el resultado
    //Reject rechaza la pregunta.
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla Bla Bla Bla");
            //resolve(nombre);
            resolve('Hay un error');
        }, 1500);
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios, " + nombre);
            resolve(nombre);
        }, 1500);
    })
}

//Así no funciona, el await solo funciona en una función async
//await hola(nombre)
async function main() {
    //Podes cambiar el await a let
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminanmos el proceso');
}

//Como saber si se esta ejecutando como async
console.log('Empezamos el proceso');
main();

//Async es para mejor el proceso en la funcionalidad.