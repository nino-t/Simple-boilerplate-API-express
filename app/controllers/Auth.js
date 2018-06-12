import { authService } from '../service'

export const AuthController = {
	login
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