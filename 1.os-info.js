const os = require('node:os');


console.log('Nombre del sistema operativo ', os.platform());
console.log('Version del sistema operativo ', os.release());
console.log('Arquitectura del sistema operativo ', os.arch());
console.log('memoria total ', os.totalmem() / 1024 / 1024 / 1024, 'GB');
console.log('UPTIME ', os.uptime() / 60 / 60, 'horas');


