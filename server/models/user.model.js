const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const User = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true},
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		userType: { type: String, required:true },
	},
	{ collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model