const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookSchema = new Schema({
	title: {
		type: 'String',
		require: true,
	},
	author: {
		type: 'String',
		require: true,
	},
	numberPages: {
		type: Number,
		require: false,
		default: 0,
	},
	publisher: {
		type: String,
		requie: false,
	},
});

// const Book =
// model('Book', bookSchema);

// module.exports = Book;
module.exports = model('Book', bookSchema);
