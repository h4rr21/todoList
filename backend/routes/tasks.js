const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser');
const models = require('../db/models')

router.use(bodyParser.json());

// {
// 	"id":1,
// 	"taskname":"cocinar",
// 	"name": "juan carlos",
// 	"description": "el almuerzo",
// 	"status":"done"
// }

router.get('/', (req, res, next) => {
	models.Tasks.findAll().then((allTasks)=>{
		res.send(allTasks);
	})	
})

router.post('/', (req, res, next) => {
	const data = req.body;
	models.Tasks.create(data).then((singleTask) => {
		res.send(singleTask);
	})
})

router.get('/:id', (req, res, next) => {
	const id = req.params.id;
	models.Tasks.findById(id).then((task)=>{
		res.send(task);
	})
});

router.put('/:id', (req, res, next) => {
	const data = req.body;
	const id = req.params.id;

	models.Tasks.findById(id).then((task) => {
		task.update(data).then((task)  => {
			res.send(task);
		})
	})
});

// router.delete('/:pos', (req, res, next) => {
// 	const posicion = req.params.pos;
// 	res.send(models.Tasks.splice(parseInt(posicion),1));

//         // model.destroy({
//         //     where: {
//         //         id: req.params.id
//         //     }
//         // })

// });

module.exports = router;