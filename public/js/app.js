let fetchWeather = "/weather";

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const weatherIcon = document.querySelector('.weatherIcon i');
const weatherCondition = document.querySelector('weatherCondition');

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
                locationElement.textContent = data.cityName;
                tempElement.textContent = data.temperature;
                weatherCondition.textContent = data.description.toUpperCase();
            }

        })

    });

})