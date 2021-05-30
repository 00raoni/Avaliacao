# Avaliacao

Criei 2 Projetos API e APP

API: http://localhost:3000/api/v1/chat

APP: http://localhost:8080/



A API foi desenvolvida em 

Node.js

MongoDB 

e a Aplicação (APP) foi em 

Vue.js 

Bootstrap




# API 

dependencies da API
{
    "body-parser": "^1.19.0",
    "consign": "^0.1.6",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "mongodb": "^3.6.8",
    "mongoose": "^5.12.10",
    "path": "^0.12.7"
}

Após salvar a pasta API

abra o console , entre na pasta, execute os seguintes comandos

1 - npm i body-parser consign cors express mongodb mongoose path

2 - npm install -g nodemon

3 - npm start  


A API estará rodando aqui : http://localhost:3000/api/v1/chat


Importante : deixei por padrão sem login e senha no banco de dados, 
a aplicação cria automaticamente a base de dados e a tabela, caso exista senha o banco de dados mongoDB favor inserir em API\api\db\connection.js -> linha 4.




# Aplicação - App

Dependencies da Aplicação : {
    "@vue/cli-plugin-babel": "^4.5.13",
    "@vue/cli-plugin-eslint": "^4.5.13",
    "@vue/cli-service": "^4.5.13",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.8.0",
    "eslint-plugin-vue": "^6.2.2",
    "vue-template-compiler": "^2.6.12"
  }

Após salvar a pasta App


abra o console , entre na pasta, execute os seguintes comandos:

1 - npm i @vue/cli-plugin-babel @vue/cli-plugin-eslint @vue/cli-service babel-eslint eslint eslint-plugin-vue vue-template-compiler

2 - npm run serve

A Aplicação estará rodando em: http://localhost:8080/, caso mude a porta da api, alterar em src/services/config.js -> linha 4








