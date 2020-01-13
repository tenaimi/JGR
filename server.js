const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const users = require('./data/users')
const logger = require('morgan')


const PORT = 3001

app.use(cors()) //cross origin helper as react can't recognize http
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to my server')
})

app.post('/users/', (req, res) => {
    console.log(req.body)
    users.push(req.body)
})

app.get('/users/', async (req, res) => {
    console.log(users)
    res.send(users)
})

app.listen(PORT, () => `server running on port ${PORT}`)
console.log('got here!!')