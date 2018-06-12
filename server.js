import express from 'express'
import bodyParser from 'body-parser'
import createRoutes from './routes'
import { SERVER_PORT } from './config'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

createRoutes(app)

app.listen(SERVER_PORT, (err) => {
	console.log('Server is running on port', SERVER_PORT)
})