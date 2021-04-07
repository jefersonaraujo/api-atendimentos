const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'agenda',
    password: 'agenda',
    database: 'agenda-petshop'
})

module.exports = conexao