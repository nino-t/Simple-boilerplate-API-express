import { 
	AuthController
} from '../app/controllers'

const Auth = (router) => {
	router.post('/login', AuthController.login)
	router.post('/register', AuthController.register)

	return router
} 

export default Auth