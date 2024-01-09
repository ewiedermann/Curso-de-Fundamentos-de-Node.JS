const http = require('http');


//Forma uno
//Req envia
//Res responde
http.createServer(function(req, res) {
    console.log('Nueva petición');
    console.log(req.url);

    //Para mostrar en el network de inspección
    res.writeHead(201, { 'Content-Type': 'text/plain' })

    //Ya se como usar el http
    res.write('Hola, ya se usar http de nodejs')

    res.end();
}).listen(3000);

console.log('Escuchando http en el puerto 3000');

//forma dos
http.createServer(router).listen(4000);

function router(req, res) {
    console.log('Nueva petición');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }
}