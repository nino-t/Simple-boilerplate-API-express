var User = require('../../models').users
import { createToken } from '../../lib'
import encrypt from 'encrypt-password'

export const authService = {
	login,
	register
}

function login(email, password){
	return new Promise((resolve,reject) => {
		User.findOne({
			where: {
				email: email,
				password: encryptPassword(password)
			},
			raw: true
		})
		.then(user => {
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
	return new Promise(async(resolve,reject) => {
		try {
			if (!data.name)
				throw 'Name field is required'

			if (!data.email)
				throw 'Email field is required'

			if (!data.password)
				throw 'Password field is required'

			let userEmail = await findUserByEmail(data.email)
			if (userEmail)
				throw 'Email is exist'

			let user = User.create({ 
				name: data.name,
				email: data.email,
				password: encryptPassword(data.password)
			})

	        if (!user)
	            throw 'Register is failed'

	    	let token = createToken(user)
	    	return resolve(token)
		} catch(e) {
			return reject(e)
		}
	})
}

function findUserByEmail(email){
	return new Promise((resolve,reject) => {
		User.findOne({
			where: {
				email: email
			},
			raw: true
		})
		.then(user => {
	        resolve(user)
		})
		.catch(err => reject(err))
	})
}

function encryptPassword(password) {
	const encryptedPassword = encrypt(password, {
		secret: 'secret',
		min: 8,
		max: 24,
		pattern: /^\w{8,24}$/,
		signature: 'signature',
	})

	return encryptedPassword
}