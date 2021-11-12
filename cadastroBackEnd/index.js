const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const corsConfig = {
    credentials: true, 
    optionsSucessStatus: 200
};

//definir porta do backEnd
const porta = 5000

//configuração JSON
app.use(express.json())

// Cors
app.use(cors({ corsConfig, origin: 'http://localhost:4200'}))

//public os arquivos das imagens
app.use(express.static('public'))

app.get('/', async(req, res) => {
    // data fora do response
    res.send('Esta rota só faz Get')})



//router
app.listen(porta, () => console.log("Rodando"))