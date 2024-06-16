import { readFile } from 'node:fs/promises';

// const {promisify} = require('node:util');
// const readFile = promisify(fs.readFile);

console.log('start reading a file...');
const text = await readFile('./archivo.txt', 'utf-8', )

console.log('primer texto: ',text);
   

console.log('haciendo otra cosa...');


const secondText = await readFile('./archivo2.txt', 'utf-8',)
console.log('segundo texto: ', secondText);

console.log('se termino la lectura de los archivos...');