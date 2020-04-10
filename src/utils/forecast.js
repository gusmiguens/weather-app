const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&APPID=0ccc9e6e76a9217d67b4c0e1cd6c0ad2&units=metric'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect with forecast service')
        } else if (body.cod != 200) {
            callback('Unable to find location')
        } else {
            callback(undefined, 'It is ' + body.main.temp + ' degrees and feels like ' + body.main.feels_like + ' degrees. The sky is '
                + body.weather[0].description + '. The humidity is up to '
                + body.main.humidity + '% and the pressure is ' + body.main.pressure + '. It is expected to be ' + body.main.temp_min + ' degrees of minimum up to '
                + body.main.temp_max + ' of maximum degrees.')
        }
    })
}

module.exports = forecast