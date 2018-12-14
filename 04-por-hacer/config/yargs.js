const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true,
            desc: 'marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'borra una tarea no deceada', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}