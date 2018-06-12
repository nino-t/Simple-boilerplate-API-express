import { 
	AuthController
} from '../app/controllers'

const Auth = (router) => {
	router.post('/login', AuthController.login)

	return router
} 

export default Auth