const fs = require('node:fs');

console.log('start reading a file...');
const  text = fs.readFile('./archivo.txt', 'utf-8', (_err, text) => {
    console.log(text);
});

console.log('haciendo otra cosa...');

fs.readFile('./archivo2.txt', 'utf-8', (_err, text) => {
    console.log(text);
});

console.log('se termino la lectura de los archivos...');