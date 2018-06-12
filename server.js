import express from 'express'
import createRoutes from './routes'
import { SERVER_PORT } from './config'

const app = express()
createRoutes(app)

app.listen(SERVER_PORT, (err) => {
	console.log('Server is running on port', SERVER_PORT)
})