var User = require('../../models').users
import { createToken } from '../../lib'

export const authService = {
	login,
	register
}

function login(email, password){
	return new Promise((resolve,reject) => {
		User.findAll({
			where: {
				email: email,
				password: password
			},
			raw: true
		})
		.then(user => {
			user = user[0]
	        if (!user)
	            throw 'Email and password invalid';

	    	let token = createToken(user)
	    	if (!token)
	    		throw "Cannot generate token"

	        resolve(token)
		})
		.catch(err => reject(err))
	})
}

function register(data){
	return new Promise((resolve,reject) => {
		User.create({
			name: data.name,
			email: data.email,
			password: data.password
		})
		.then(result => {
			resolve(result)
		})
		.catch(err => reject(err))
	})
}