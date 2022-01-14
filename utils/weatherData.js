const request = require('request')
const constants = require('../config')


const weatherData = (address, callback) => {
    const url = constants.openWeatherMap.BASE_URL + encodeURIComponent(address) + '&appid=' + constants.openWeatherMap.SECRET_KEY
    request({url, json:true}, (error, {body}) => {
       if(error) {
           callback("Can't fetch data", undefined)
       } else {
           callback(undefined, {
               temperature: body.main.temp,
               description: body.weather[0].description,
               cityName: body.name,
               icon: body.weather[0].icon
           })
       }
   })
}

module.exports = weatherData;