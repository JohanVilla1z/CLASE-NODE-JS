const { readFile } = require('node:fs/promises');

//IIFE - Immediately Invoked Function Expression

(
    async ()=>{
        console.log('start reading a file...');
        const text = await readFile('./archivo.txt', 'utf-8', )
        console.log('primer texto: ',text);

        console.log('haciendo otra cosa...');

        const texto = await readFile('./archivo2.txt', 'utf-8',)
        console.log('segundo texto: ', texto);
        console.log('se termino la lectura de los archivos...');

    }

)()