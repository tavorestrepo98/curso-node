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

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el Id ${id}`);
    } else {
        return empleadoDB;
    }

};

let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No existe un salario para ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
};

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `${resp.nombre} tiene un salario de ${resp.salario}`;
}

getInformacion(4)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))