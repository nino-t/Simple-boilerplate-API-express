import { AUTH_KEY } from '../config'
import jwt from 'jsonwebtoken'
import _ from 'lodash'

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
	if (typeof user !== 'object'){
		user = {}
	}

	user.sessionData = _.reduce(user.sessionData || {}, (memo, val, key) => {
		if (typeof val !== "function" && key !== "password"){
			memo[key] = val
		}
		return memo
	}, {})

	let token = jwt.sign({
		user : user.sessionData
	}, AUTH_KEY, {
		expiresIn: 3600,
		algorithm: 'HS256'		
	})

	return token
}