## Projeto pessoal utilizando NodeJs com Express | JavaScript | MySql. (1a versão)

### Objetivo: Desenvolver um aplicativo para ser utilizado para cadastrar as crianças que são da organização primária da minha igreja (A Igreja de Jesus Cristo do Santo dos Ultimos Dias), crianças entre 1 ano e meio até 11 anos. Também registrar a qual classe pertence, dados dos pais e fazer o registro dos dias que as mesmas vão a igreja. Esta é 1a versão ainda visando somente o backend em uma base local para testar as APIs, muita coisa ainda falta a ser feita, vamos seguindo e aprimorando as versões.

### Faz as conexões com o banco de dados MySQL local. 

#### Procedimentos que realiza:
- Criação da tabela crianças
- CRUD na tabela crianças através de API usando arquivos no formato JSON
- São realizadas críticas ao preenchimento dos campos
- Servidor roda na porta http://localhost:3000
- Testes de conexão da API sendo feitas com a ferramenta PostMan.

#### Para executar projeto, após o clone fazer:
- no Mysql criar a database primaria na porta 3307
- no arquivo conexao.js informar os dados referente sua instalação do MySql
- executar npm install
- executar npm start (para subir o servidor)
- testar os métodos GET, POST, PATCH e DELETE no Postma na rota criancas.

## Vídeo da demonstração no link https://youtu.be/dQCEhK2iLc0



