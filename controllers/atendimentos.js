module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Rota atendimentos'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Atendimentos Post')
        
    })
}