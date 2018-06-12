import express from 'express'
import API from './api'
import Auth from './auth'

import {
	verifyTokenMiddleware
} from '../middleware'

let router = express.Router()
const Routes = app => {
	app.use('/auth', Auth(router))

	router.all('*', verifyTokenMiddleware)
	app.use('/api', API(router))
}

export default Routes