import app from './app.json'
import auth from './auth.json'
import server from './server.json'
import database from './database.json'

export const APP_NAME = app.NAME
export const APP_ENV = app.ENV
export const APP_URL = app.URL

export const AUTH_KEY = auth.secretKey

export const SERVER_PORT = server.PORT

export const DB_HOST = database[APP_ENV].host
export const DB_NAME = database[APP_ENV].database
export const DB_USER = database[APP_ENV].username
export const DB_PASS = database[APP_ENV].password
export const DB_PROTOCOL = database[APP_ENV].protocol