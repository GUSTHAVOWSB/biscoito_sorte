/* criamos o package.json atraves do comando: npm init
instalamos o express atraves do comando: npm install --save express
(obs. O --save significa que essa alteração gravará no arquivo package.json)
instalamos o EJS atraves do comando: npm install --save ejs
instalamos o nodemon atraves do comando: npm install --save nodemon
criamos o arquivo .gitignore e colocamos a pasta do node_modules
iniciamos o git atraves do comando: git init
adicionamos todos os arquivos atraves do comando: git add .
salvamos com uma mensagem atraves do comando: git commit -m "cria projeto Biscoito da Sorte" */


//importando express (servidor)
const express = require('express')
// criando servidor express
const server = express()

//importando a lista de frases
const frases = require('./mockup')

// define o motor de renderização da pagina como sendo o EJS
server.set('view engine', 'ejs')

// configurar o caminho da pasta views arquivos de ejs
server.set('views', './views')

// configuração dos arquivos estáticos 
server.use(express.static('./public'))

// configura o bodyparse do express
server.use(express.urlencoded({extended: true}))

// definindo a rota para home
server.get('/', (req,res) =>{
    res.render('home', {frases})
})

//escurando a porta 3000
server.listen (3000, function(){
    console.log('Servidor rodando http://localhost:3000')
})