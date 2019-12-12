const mongoose = require('mongoose');
const url = process.env.MONGODB;

mongoose
	.connect(url, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
        useUnifiedTopology: true,
        dbName: 'notesApp'
	})
	.then(db => console.log('DB is connected'))
	.catch(err => console.log(err));
