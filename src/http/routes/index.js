import { database } from '../../database/index.js'
import { listFromTable } from '../../services/mysql/lista-tabela.js'
import { list, listById } from '../controllers/marcas.js'
export const routes = async(app) => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: "API Ok."})
    })
    app.get('/marcas', list)
    app.get('/marcas/:id', listById)
    app.post('/sync', async (req, res) => {
        const response = await listFromTable('marcas')
        return res.status(200).send({ data: response})
    })
}