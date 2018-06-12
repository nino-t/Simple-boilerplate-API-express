var Todo = require('../../models').todos

export const todoService = {
	getList
}

function getList(){
	return new Promise((resolve,reject) => {
		Todo.findAll({})
		.then(data => {
			resolve(data)
		})
		.catch(err => reject(err))
	})
}