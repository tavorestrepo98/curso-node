const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5c3d540c404e95f74c54c89239baea54`);
    /* if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados de temperatura para las coordenadas.`);
    } */
    return resp.data.main.temp;

}

module.exports = {
    getClima
}