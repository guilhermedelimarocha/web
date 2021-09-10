const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
 
// utiliza de arrow-function para chamadas
module.exports = () => {
 const app = express()
 
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 
//   inclui os controllers e joga na constante app
 consign()
   .include('controllers')
   .into(app)
 
 return app
}