exports.ListAll = (req, res) => {
    let tarefas = [
        {
            descricao: 'bla bla1',
            data: '07/08/2020',
            status: 'pendente1'
        },
        {
            descricao: 'bla bla2',
            data: '07/08/2020',
            status: 'pendente2'
        }
    ]
    res.send(tarefas)
}

exports.createOne = (req, res) => {
    let response = {
        message: 'cadastrado',
        data: req.body
    }
    res.send(response)
}