//Manejo de call back hell

function hola(nombre, micallback) {
    setTimeout(function() {
        console.log("Hola, " + nombre);
        micallback();
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log("Bla Bla Bla Bla");
        callbackHablar();
    }, 1500);
}

function adios(nombre, micallback) {
    setTimeout(function() {
        console.log("Adios, " + nombre);
        micallback();
    }, 1500);
}

//Función para integrar la conversación hola, hablar y adios
//callback es para ver lo que sucede después
function conversacion(nombre, veces, callback) {
    if (veces => 0) {
        //Recuversidad
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }

}

//Acá se esta trabajando un funcion con callback hell, permite automatizar. Pero no es la forma
//Estas es una forma async
console.log('Iniciando proceso...');
hola('Exquiel', function() {
    hablar(function() {
        hablar(function() {
            adios('Carlos', function() {
                console.log('Terminado el proceso...');
            });
        });
    });
});
console.log('Terminando proceso...');


//Esta es la forma correcta
//Podremos hacer la función conversar y así poder hacerr correctamente la automatización
console.log('Iniciando proceso...');
hola('Carlos', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Terminando proceso...');
    });
});