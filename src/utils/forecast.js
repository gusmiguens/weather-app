const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ latitude +'&lon='+ longitude +'&APPID=0ccc9e6e76a9217d67b4c0e1cd6c0ad2&units=metric'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect with forecast service')
        } else if (body.cod != 200) {
            callback('Unable to find location')
        } else {
            callback(undefined, 'It\'s '
            + body.main.temp
            + ' degrees and '
            + body.main.humidity + ' humidity')
        }
    })
}

module.exports = forecast