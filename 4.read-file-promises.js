const fs = require('node:fs/promises');

// const {promisify} = require('node:util');
// const readFile = promisify(fs.readFile);

console.log('start reading a file...');
fs.readFile('./archivo.txt', 'utf-8', )
    .then((text) => {
        console.log('primer texto: ',text);
    })

console.log('haciendo otra cosa...');

fs.readFile('./archivo2.txt', 'utf-8',)
    .then((text) => {
        console.log('segundo texto: ', text);
    })

console.log('se termino la lectura de los archivos...');