const fs = require("node:fs");  // a partir de Node 16 se recmomienda usar el prejijo node:
 
const stats = fs.statfs('./archivo.txt');

console.log(
    stats.isFile(),             //su es un fichero
    stats.isDirectory(),        // si es un directorio
    stats.isSimbolicLink(),     // si es un enlace simbolico
    stats.size,                 // tamaño en bytes
);