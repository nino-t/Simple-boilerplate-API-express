import { authService } from '../service'

export const AuthController = {
	login,
	register
}

async function login(req,res) {
	let input = req.body
	try{
		let result = await authService.login(input.email, input.password)
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}
} 

async function register(req,res) {
	try{
		let result = await authService.register(req.body)
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}
} 