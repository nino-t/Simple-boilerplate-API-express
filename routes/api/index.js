import { TodoController } from '../../app/controllers'

const API = (router) => {
	router.get('/todos', (req, res) => {
		res.send(TodoController.getList())
	})

	return router
} 

export default API