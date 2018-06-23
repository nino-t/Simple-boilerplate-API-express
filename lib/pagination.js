import paginate from 'express-paginate'

export default class Pagination{
	constructor(limit, offset) {
		this.limit = limit
		this.offset = offset
	}

	getCondition(){
		return {
			limit: this.limit,
			offset: this.offset
		}
	}

	render(req, data) {
		let results = {}
		results.itemCount = data.count
		results.pageCount = Math.ceil(data.count / this.limit)
		results.page = paginate.getArrayPages(req)(3, results.pageCount, req.query.page)
		results.result = data

		return results
	}
}