const express = require('express')
const app = express()
require('dotenv').config()

app.use('/places', require('./controllers/places'))
 
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
 
app.listen(process.env.PORT)