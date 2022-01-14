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
    console.log(search.value);

})