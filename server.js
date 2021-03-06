import express from 'express'
import bodyParser from 'body-parser'
import createRoutes from './routes'
import { SERVER_PORT } from './config'
import paginate from 'express-paginate'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(paginate.middleware(10, 50))

createRoutes(app)

app.listen(SERVER_PORT, (err) => {
	console.log('Server is running on port', SERVER_PORT)
})