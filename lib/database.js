import Sequelize from 'sequelize'
import { 
	DB_HOST, DB_NAME, DB_USER, DB_PASS, DB_PROTOCOL 
} from '../config'

export const database = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_PROTOCOL,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})