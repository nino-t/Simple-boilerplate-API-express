import { 
	TodoController,
	AuthController
} from '../../app/controllers'

const API = (router) => {
	router.get('/todos', TodoController.getList)
	router.post('/todos', TodoController.storeData)
	router.get('/todos/:todoId/edit', TodoController.findById)
	router.put('/todos/:todoId/edit', TodoController.updateData)
	router.delete('/todos/:todoId', TodoController.deleteData)

	router.get('/verify-token', AuthController.verifyAuth)

	return router
} 

export default API