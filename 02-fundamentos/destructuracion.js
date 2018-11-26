let deadpool = {
    nombre: "Wade",
    apellido: "Winstone",
    poder: "regeneracion",
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido }`;
    }
};

console.log(deadpool.getNombre());

let { nombre: primernombre, apellido: primerapellido, poder } = deadpool;

console.log(primernombre, primerapellido, poder);