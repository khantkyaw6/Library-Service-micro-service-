const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const Order = require('./models/Order');

const app = express();
app.use(express.json());

app.get('/orders', async (req, res) => {
	try {
		const order = await Order.find();

		res.json({
			isSuccess: true,
			message: 'Customer list',
			data: order,
		});
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
});

app.get('/orders/:id', async (req, res) => {
	try {
		const order = await Order.findById(req.params.id);
		console.log(order);

		if (order) {
			// axios.get('http://localhost:4545/books'); // ဒီမှာ axios နဲ့ ထပ်ပီး တခုချင်းစီရဲ့ detail ကို ရှာပီး ပြန်ပီးထည့်ပေး၊ ‌ရေးရမှာ ပျင်းသွားလို့ comment ပဲ ထည့်လိုက်ပြီ :P

			res.json({
				isSuccess: true,
				message: 'Order detail',
				data: order,
			});
		}
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
});

app.post('/order', async (req, res) => {
	console.log(req.body);
	try {
		let newOrder = new Order(req.body);
		const order = await newOrder.save();

		res.json({
			isSuccess: true,
			message: 'Order create Successfully',
			data: order,
		});
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
});

mongoose
	.connect(
		'mongodb+srv://ineedadmin:ineedpassword@cluster0.pmjwpba.mongodb.net/ordersservice?retryWrites=true&w=majority'
	)
	.then((result) => {
		console.log('Db connnected - Order Service');
		app.listen(7777, () => {
			console.log('Up and running! -- This is our Order Service');
		});
	});
