const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const puerto = 8181;

// app.get('/', (req, res) => {
//     res.write('Hola Mundo')
//     res.end()
// })

app.use(express.static('hbs/public'))


app.set('views', path.join(__dirname + '/hbs/public/views'))
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/hbs/public/views/partials')

app.get('/', (req, res) => {
    res.render('home')
})



app.listen(8181, () => {
    console.log(`Escuchando desde el puerto ${puerto}`)
})
