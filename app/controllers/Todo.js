import { todoService } from '../service'

export const TodoController = {
	getList,
	storeData,
	findById,
	updateData,
	deleteData
}

async function getList(req,res) {
	try{
		let result = await todoService.getList()
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}
}

async function storeData(req,res) {
	try{
		let result = await todoService.storeData(req.body)
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}
}

async function findById(req,res) {
	try{
		let result = await todoService.findById(req.params.todoId)
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}
}

async function updateData(req,res) {
	try{
		let condition = {}
		condition.id = req.params.todoId

		let result = await todoService.updateData(condition, req.body)
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}
}

async function deleteData(req,res) {
	try{
		let condition = {}
		condition.id = req.params.todoId

		let result = await todoService.deleteData(condition)
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}	
}