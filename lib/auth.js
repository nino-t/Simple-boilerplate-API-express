import { AUTH_KEY } from '../config'
import jwt from 'jsonwebtoken'

export const verifyToken = token => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, AUTH_KEY, (err, decodedToken) => {
			if (err || !decodedToken){
				return reject(err)
			}
			
			resolve(decodedToken)
		})
	})
}

export const createToken = user => {
	let token = jwt.sign({
		userId : user.id
	}, AUTH_KEY, {
		expiresIn: 3600,
		algorithm: 'HS256'		
	})

	return token
}