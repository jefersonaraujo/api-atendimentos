const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

const apm = require ('elastic-apm-node'). start ({ 
    serviceName: 'api-atendimentos', 
    serverUrl: 'http://192.168.1.141:8200', 
  })


conexao.connect(erro => {
    if(erro){
        console.log(erro)
    } else{
        console.log('conectado com sucesso')

        Tabelas.init(conexao)
        const  app = customExpress()
        app.listen(3000, () => console.log('Servidor rodando na portal 3000'))

        
    }
})

