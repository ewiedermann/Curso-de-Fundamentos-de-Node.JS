let saludo = 'Hola';

console.log(saludo);

//Si necesito configurar las variables de entorno, es una forma
//de manejar la información, sin que se vean.
//No se definio env, para hacerlo hay que hacer por comandos

//Comando a usar, NOMBRE=Exequiel node conceptos/entorno.js
//Otra forma $env:NOMBRE="Carlos"
let presentacion = process.env.NOMBRE;

console.log('Soy ' + presentacion);

//Si quiero dejar la información fija puedo hacer la siguiente forma

let nombre = process.env.NOMBRE || 'No tiene nombre';

console.log('Soy ' + nombre);