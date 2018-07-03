import { authService } from '../service'
import { verifyToken } from '../../lib/auth'

export const AuthController = {
	login,
	register,
	verifyAuth
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

async function verifyAuth(req,res) {
	try{
		let result = await verifyToken(req.query.token) 
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}	
}