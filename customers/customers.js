const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./models/Customer');

const app = express();

app.use(express.json());

app.get('/customer', async (req, res) => {
	try {
		const customer = await Customer.find();

		res.json({
			isSuccess: true,
			message: 'Customer list',
			data: customer,
		});
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
});

app.post('/customer', async (req, res) => {
	console.log(req.body);
	try {
		const newCustomer = new Customer(req.body);
		const customer = await newCustomer.save();

		res.json({
			isSuccess: true,
			message: 'Customer create Successfully',
			data: customer,
		});
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
});

mongoose
	.connect(
		'mongodb+srv://ineedadmin:ineedpassword@cluster0.pmjwpba.mongodb.net/customersservice?retryWrites=true&w=majority'
	)
	.then((result) => {
		console.log('Db connnected - Customer Service');
		app.listen(5555, () => {
			console.log('Up and running! -- This is our Customer service');
		});
	});
