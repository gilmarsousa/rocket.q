//importando o express
const express = require('express')

const route = require('./route')

//caminho
const path = require('path')

//criando um server
const server = express() //inicia o express

//falamos pro express que é o nosso server que a nossa view engine é o ejs
server.set('view engine', 'ejs')

//acessar a pasta public
server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

//midlle
server.use(express.urlencoded({ extended: true }))

//falar pro node usar o route
server.use(route)

//funcionalidade dentro do express
server.listen(3000, () => console.log("RODANDO"))//porta

