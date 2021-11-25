class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarCrianca()
    }

    criarCrianca() {
        const sql = 'CREATE TABLE IF NOT EXISTS Criancas (id_crianca int not Null Auto_increment, nome varchar(100) not Null, classe char(20) not null, nome_pai varchar(100) Not Null, nome_mae varchar(100) Not Null, data_nascto date Not Null, nr_membro_pai bigint, nr_membro_mae bigint, status varchar(20) Not Null,    observacoes text,data_Criacao datetime not null, PRIMARY KEY(id_crianca))'
    
        this.conexao.query(sql,(erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('A tabela CRIANCAS foi criada')
            }  
        })
    }
}

module.exports = new Tabelas



