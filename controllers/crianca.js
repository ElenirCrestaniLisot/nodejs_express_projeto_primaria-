const Crianca = require('../models/criancas');

module.exports = app => { 
    app.get('/criancas',(req,res) => {
        Crianca.lista(res)
    });
    
    app.get('/criancas/:id_crianca', (req, res) => { 
        const id_crianca = parseInt(req.params.id_crianca)
        Crianca.buscaPorId(id_crianca,res)
    });

    app.post('/criancas',(req,res) => {
        const crianca = req.body
        Crianca.adiciona(crianca, res)
    });

    app.patch('/criancas/:id_crianca', (req, res) => {
        const id_crianca = parseInt(req.params.id_crianca)
        const valores = req.body
        Crianca.altera(id_crianca, valores, res)
    })

    app.delete('/criancas/:id_crianca',(req,res) => {
        const id_crianca = parseInt(req.params.id_crianca)
        Crianca.deleta(id_crianca, res)
    });
}
