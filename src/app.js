const express = require('express');
const hbs = require('hbs');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000

const publicStaticDirPath = path.join(__dirname, '../public')

const viewPath = path.join(__dirname, '../templates/views');

const partialsPath = path.join(__dirname, '../templates/partials')

app.use(express.static(publicStaticDirPath));

app.get('', (req, res) => {
    res.send('Hi this is weather app');
})

app.get('/weather', (req,res) => {
    res.send('This is the weather endpoint')
})

app.get('*', (req, res) => {
    res.send('Page not found')
})


app.listen(port, () =>{
    console.log('server is up and running on port: ', port);

})