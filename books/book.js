const express = require('express');
const Book = require('./models/Book.js');

const app = express();
app.use(express.json());

const mongoose = require('mongoose');

app.get('/books', async (_req, res) => {
	try {
		const books = await Book.find();

		res.json({
			isSuccess: true,
			message: 'All Book list',
			data: books,
		});
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
});

app.post('/books', async (req, res) => {
	console.log(req.body);
	try {
		const newBook = new Book(req.body);
		const book = await newBook.save();

		res.json({
			isSuccess: true,
			message: 'Book create Successfully',
			data: book,
		});
	} catch (error) {
		console.log(error);
		throw new Error(error);
	}
});

mongoose
	.connect(
		'mongodb+srv://ineedadmin:ineedpassword@cluster0.pmjwpba.mongodb.net/booksservice?retryWrites=true&w=majority'
	)
	.then((result) => {
		console.log('Db connnected - Book Service');
		app.listen(4545, () => {
			console.log('Up and running! -- This is our book service');
		});
	});
