const BASE_ICON_URL =  "http://openweathermap.org/img/wn/"
const ICON_SIZE = "@4x.png"


const fetchWeather = "/weather";

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon');

const weatherCondition = document.querySelector('.weatherCondition');

const tempElement = document.querySelector('.temperature span')

const locationElement = document.querySelector('.place')

const dateElement = document.querySelector('.date')

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let month = monthNames[new Date().getMonth()]
let date = new Date().getDate()

dateElement.textContent = `${month} ${date}`



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    locationElement.textContent = "Forecasting...";
    tempElement.textContent = "";
    weatherCondition.textContent = "";

    const locationAPI = fetchWeather + "?address=" + search.value;
    
    fetch(locationAPI).then(response => {
        response.json().then(data => {
            if(data.error) {
                locationElement.textContent = data.error;
                tempElement.textContent = "";
                weatherCondition.textContent = "";
            } else {
                
                iconPNG = BASE_ICON_URL + data.icon + ICON_SIZE;

                locationElement.textContent = data.cityName;
                tempElement.textContent = ((data.temperature - 273.15) * 9/5 + 32).toFixed(0) + String.fromCharCode(176) + "F";
                weatherCondition.textContent = data.description.toUpperCase();
                weatherIcon.setAttribute("style", "background-image: url(" + iconPNG + ")")
            }

        })

    });

})