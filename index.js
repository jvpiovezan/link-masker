const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const chalk = require('chalk')

const app = express()
const server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.render('index')
})

server.listen(app.get('port'), () => {
  console.clear()
  console.log(chalk.green('[Success]'), `Server listening on port ${app.get('port')}!`)
})