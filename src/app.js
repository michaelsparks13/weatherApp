const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views');

const partialsPath = path.join(__dirname, '../templates/partials')

const weatherData = require('../utils/weatherData');

app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticDirPath));

app.get('', (req, res) => {
    res.send('Hi this is weather app');
})

app.get('/weather', (req,res) => {
    const address = req.query.address
    weatherData(address, (error, {temperature, description, cityName}) => {
        if (error) {
            return res.send({
                error
            })
        }
        console.log(temperature, description, cityName);
        res.send({
            temperature,
            description,
            cityName
        })
    });
})

app.get('*', (req, res) => {
    res.send('Page not found')
})


app.listen(port, () =>{
    console.log('server is up and running on port: ', port);

})