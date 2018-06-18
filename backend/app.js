const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

app.use('/',tasks);

app.listen(3000,()=>{
	console.log('Server runs on port 3000');
});
