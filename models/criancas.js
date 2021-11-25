/*const { json } = require('express')*/
/*const { json } = require('body-parser/')*/
const moment = require('moment')
const crianca = require('../controllers/crianca')
const conexao = require('../infraestrutura/conexao')


class Criancas {
    adiciona(crianca,res) {

        const data_Criacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data_nascto = moment(crianca.data_nascto, 'DD/MM/YYYY').   format('YYYY-MM-DD HH:mm:ss')

        /** Tratamento de regras de negócio para as validacoes - Inicio*/
        const dataEhValida = moment(data_nascto).isSameOrBefore(data_Criacao)
        const nomeEhValido = crianca.nome.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido:dataEhValida,
                mensagem: 'Data de nascimento deve ser menor que a data atual'
            },
            {
                nome: 'nome',
                valido:nomeEhValido,
                mensagem: 'O nome da criança deve ter pelo menos menos 5 caracteres'
            } 
        ]

        const erros = validacoes.filter(campo => !campo.valido);
        const existemErros = erros.length;

         /** Tratamento de regras de negócio para as validacoes - Fim*/

        if (existemErros) {
            res.status(400).json(erros)    
        } else {
            const criancaDatada = {...crianca, data_Criacao, data_nascto}
        
            const sql = 'INSERT INTO CRIANCAS SET ?'

            conexao.query(sql, criancaDatada, (erro, resultados) => {
                if (erro) {
                     res.status(400).json(erro)
                } else {
                     res.status(201).json(criancaDatada)
                }
            })
        }
    }

    lista(res) {
        const sql = 'SELECT * FROM CRIANCAS'

        conexao.query(sql, (erro, resultados) => { 
            if(erro) {
                res.status(400).json(erro)
            } else { 
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM CRIANCAS WHERE ID_CRIANCA=${id}`

        conexao.query(sql, (erro, resultados) => {
            const crianca = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(crianca)
            }
        })
    }

    altera(id, valores, res) {
        if (valores.data_nascto) {
            valores.data_nascto = moment(valores.data_nascto, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
      
            const sql = 'UPDATE Criancas SET ? WHERE id_crianca=?'

             conexao.query(sql, [valores, id], (erro, resultados) => {
                if(erro) {
                   res.status(400).json(erro)
               } else {
                    res.status(200).json({...valores, id})
                }
            })
    }

    deleta (id, res) {
        const sql ='DELETE FROM Criancas WHERE ID_crianca=?'

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
               res.status(200).json({id})
            }
        })
    }
}

module.exports = new Criancas;
