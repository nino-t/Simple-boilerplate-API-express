import { todoService } from '../service'

export const TodoController = {
	getList
}

async function getList(req,res) {
	try{
		let result = await todoService.getList()
		res.status(200).send(result)
	}catch(err){
		res.status(403).send(err)
	}
} 