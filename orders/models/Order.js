const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const orderSchema = new Schema({
	CustomerID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	BookID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	initialDate: {
		type: Date,
		required: true,
	},
	deliveryDate: {
		type: Date,
	},
});

const Order = model('order', orderSchema);

module.exports = Order;
