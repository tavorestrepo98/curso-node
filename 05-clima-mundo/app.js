//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'direccion de la ciudad para optener el clima'
    }
}).argv;

//console.log(argv.direccion);

let getInfo = async(direccion) => {

    try {
        let coor = await lugar.getLugarLatLng(direccion);
        let t = await clima.getClima(coor.lat, coor.lng);

        return `Direccion: ${coor.direccion}\nTemperatura: ${t}`;
    } catch (error) {
        return 'no se pudo determinar el clima';
    }


}

getInfo(argv.direccion)
    .then(info => console.log(info))
    .catch(e => console.log(e));