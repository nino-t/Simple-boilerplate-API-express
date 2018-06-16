var Todo = require('../../models').todos

export const todoService = {
	getList,
	findById,
	storeData,
	updateData,
	deleteData
}

function getList(){
	return new Promise((resolve,reject) => {
		Todo.findAll({})
		.then(result => {
			resolve(result)
		})
		.catch(err => reject(err))
	})
}

function storeData(data){
	return new Promise((resolve,reject) => {
		Todo.create(data)
		.then(result => {
			resolve(result)
		})
		.catch(err => reject(err))
	})
}

function findById(ID){
	return new Promise((resolve,reject) => {
		Todo.findById(ID)
		.then(result => {
			resolve(result)
		})
		.catch(err => reject(err))
	})
}

function updateData(condition, data){
	return new Promise((resolve,reject) => {		
		Todo.update(data, {
			where: condition
		})
		.then(result => {
			resolve(result)
		})
		.catch(err => reject(err))
	})
}

function deleteData(condition){
	return new Promise((resolve,reject) => {		
		Todo.destroy({
			where: condition
		})
		.then(result => {
			resolve(result)
		})
		.catch(err => reject(err))
	})
}
