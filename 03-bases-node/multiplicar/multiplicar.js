const fs = require('fs');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es numero`)
        } else {
            let data = '';
            for (let i = 0; i <= limite; i++) {
                data += `${base} * ${i} = ${base*i}\n`;
            }

            fs.writeFile(`tabla-${base}.txt`, data, (err) => {
                if (err)
                    reject(err)
                else
                    resolve(`tabla-${base}.txt`)
            });

        }

    });
}

module.exports = {
    crearArchivo,
    listarTabla
};