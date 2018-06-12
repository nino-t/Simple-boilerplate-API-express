import { 
	TodoController
} from '../../app/controllers'

const API = (router) => {
	router.get('/todos', TodoController.getList)

	return router
} 

export default API