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
    salario: 120000
}, {
    id: 2,
    salario: 230000
}]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe ningun empleado con id: ${id}`);
    } else {
        callback(null, empleadoDB);
    }
}

getEmpleado(1, (error, empleado) => {
    if (error) {
        return console.log(error);
    }
    console.log(empleado);
});