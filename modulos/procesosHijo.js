const { exect, spawn } = require('child_process');

//ls -la para linux
//dir para windows
exec('dir', (erro, stdout, sterr) => {
    if (erro) {
        console.error(erro);
        return false;
    }
    console.log(stdout);
})

//para ejecutar un proceso hijo de otro js
exec('node modules/consola.js', (erro, stdout, sterr) => {
    if (erro) {
        console.error(erro);
        return false;
    }
    console.log(stdout);
})

//El más básico para spawn
let proceso = spawn('dir');

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log('Esta muerto el proceso');
    console.log(process.killed);
    console.log(dato.toString());
})

proceso.on('exit', function() {
    console.log("Se ha cerrado el proceso");
    console.log(proceso.killed);
})