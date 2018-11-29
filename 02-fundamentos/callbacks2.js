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

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => {
        return salario.id === empleado.id;
    })

    if (!salarioDB) {
        callback(`No se encontro un salario para ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        })
    }
}

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    })

    if (!empleadoDB) {
        callback(`No existe un empleado con el Id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    getSalario(empleado, (error, resp) => {
        if (error) {
            return console.log(err);
        } else {
            console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
        };
    })
});