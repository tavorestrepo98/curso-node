'use strict'
setTimeout(() => {
    console.log("Hola mundo");
}, 5000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    };
    callback(usuario);

}

getUsuarioById(13221, (usuario) => {
    console.log("El usuario es", usuario);
})