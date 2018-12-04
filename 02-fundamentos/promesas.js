'use strict'
let empleados = [{
    id: 1,
    nombre: "Fernando"
}, {
    id: 2,
    nombre: "Gustavo"
}, {
    id: 3,
    nombre: "Carlos"
}];

let salarios = [{
    id: 1,
    salario: 3000000
}, {
    id: 2,
    salario: 240000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        });

        if (!empleadoDB) {
            reject(`No existe un empleado con el Id ${id}`);
        } else {
            resolve(empleadoDB);
        }

    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => {
            return salario.id === empleado.id;
        });

        if (!salarioDB) {
            reject(`No existe un salario para ${empleado.id}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }

    });
}

getEmpleado(3).then(empleado => {
        return getSalario(empleado);

    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })