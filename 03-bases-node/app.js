const argv = require('./config/yargs').argv;
const colors = require('colors')

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let commando = argv._[0];

switch (commando) {
    case 'listar':
        listarTabla(Number(argv.base), Number(argv.limite))
        break;
    case 'crear':
        crearArchivo(Number(argv.base), Number(argv.limite))
            .then(archivo => console.log(`Archivo creado: ${archivo}`.blue))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comandos no validos'.red);
}