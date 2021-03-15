const express = require('express')
//const path = require('path')
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')
const app = express()


// importando rutas

const customerRoutes = require('./routes/customer')


// settings ------------------------------

app.set('port', process.env.PORT || 3000) // esta linea signigica: prepara una variable port y asignale el puerto que tenga el servidor por defecto. Si no, asignale el puerto 3000
app.set('view engine', 'ejs')     // esta otra linea para configurar ejs. A partir de ahora nodejs sabe que vamos a utilizar este motor de plantillas
app.set('views', __dirname + '/views') // le decimos deonde esta la carpeta con las views
//app.set('views', path.join(__dirname, 'views')) // path.join() nos facilita la tareaa la hora de colocar el web en distintos servidores que pueden estar usando difwerentes sistemas operaticos

// middlewares

app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'my*8-9+6POiusql',
    port: 3306,
    database: 'crudnodejsmysql'
}, 'single'))

app.use(express.urlencoded({extended: false}))

// routes

app.use('/', customerRoutes);

// static files

app.use(express.static(__dirname + 'public'))

// starting server

app.listen(app.get('port'), () => {
    console.log('server on port 3000')
})
