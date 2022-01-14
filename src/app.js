const express = require('express');
const { render } = require('express/lib/response');
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
    res.render('index', {
        title: 'Weather App'
    })
})

app.get('/weather', (req,res) => {
    const address = req.query.address
    if (!address) {
        return res.send({
            error: "Please enter an address"
        })
    }

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
    res.render('404', {
        title: 'Page Not Found'
    })
})


app.listen(port, () =>{
    console.log('server is up and running on port: ', port);

})