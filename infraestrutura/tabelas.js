class Tabelas {
    // inicia a conexão, ou tenta pelo menos
    init(conexao) {
        this.conexao = conexao

        // usa a função declarada abaixo
        this.criarAtendimentos()
    }
// função para criar a tabela Atendimentos
    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                // Quando retorna erro na condição
                console.log(erro)
            } else {
                // quando executa a query na constante 'sql'
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }
}
// exporta Tabelas
module.exports = new Tabelas