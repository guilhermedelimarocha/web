// Arquivo de conexão
// requer o mysql
const mysql = require('mysql')

// cria conexão
const conexao = mysql.createConnection({
    // servidor utilizado como host nesse caso localhost mas poderia ser de uma hospedagem
    host: 'localhost',
    // porta que irá rodar, padrão a porta 3306 no mysql
    port: 3306,
    // usuário do banco
    user: 'root',
    // senha 
    password: 'admin',
    // nome do banco de dados
    database: 'agenda-petshop'
})

module.exports = conexao 