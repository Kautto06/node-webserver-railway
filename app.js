const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs')
//Servir contenido estatico
app.use(express.static('public'))

app.get('/',  (req, res) =>{
    res.render('home',{
        nombre: 'Gerardo Benavides',
        titulo: 'Curso de node'
    })
})

app.get('/generic',  (req, res) =>{
    res.render('generic', {
        nombre: 'Gerardo Benavides',
        titulo: 'Curso de node'
    })
})

app.get('/elements',  (req, res) =>{
    res.render('elements', {
        nombre: 'Gerardo Benavides',
        titulo: 'Curso de node'
    })
})

app.get('*',  (req, res) =>{
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Ejemplo listen en puerto  http://localhost:${port}`)
})