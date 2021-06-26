//importar o express para poder usalo
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

//guarda todas funcionalidades de rotas que o express tem
const route = express.Router()

//definindo as rotas
route.get('/', (req, res) => res.render("index", { page: 'enter-room' }))

route.get('/create-pass', (req, res) => res.render("index", { page: 'create-pass' }))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
//formato que o formulario de dentro da modal tem que passar a inofrmação
route.post('/question/:room/:question/:action', QuestionController.index)


module.exports = route