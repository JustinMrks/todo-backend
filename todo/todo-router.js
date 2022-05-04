const router = require('express').Router();

const Todo = require('./todo-model.js');

const e = require('express');

router.get('/', (req, res) => {
  Todo.find().then((todoList) => {
    res.status(200).json(todoList);
  });
});

router.put('/:id/toggle', (req, res) => {
  Todo.toggleCompletion(req.params.id).then((newItem) => {
    res.status(200).json(newItem);
  });
});

router.put('/:id', (req, res) => {
  Todo.update(req.params.id, req.body).then((newItem) => {
    res.status(200).json(newItem);
  });
});

module.exports = router;
