import { verifyToken } from '../lib'

export const verifyTokenMiddleware = (req, res, next) => {
	let token = (req.method === 'POST') ? req.body.token : req.query.token

	verifyToken(token)
	.then((decodedToken) => {
		req.user = decodedToken.data
		next()
	})
	.catch((err) => {
		res.status(400)
		.json({message: "Invalid auth token provided."})
	})
}