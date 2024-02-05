const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const customerSchema = new Schema({
	name: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
		require: true,
	},
	address: {
		type: String,
		require: true,
	},
});

module.exports = model('customer', customerSchema);
