import express from 'express'
import API from './api'

let router = express.Router()
const Routes = app => {
	app.use('/api', API(router))
}

export default Routes