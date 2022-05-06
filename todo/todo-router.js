const router = require('express').Router();

const Todo = require('./todo-model.js');

const e = require('express');

router.get('/', (req, res) => {
  Todo.find().then((todoList) => {
    res.status(200).json(todoList);
  });
});

router.get('/:id', (req, res) => {
  Todo.findById(req.params.id).then((item) => {
    res.status(200).json(item);
  });
});

router.get('/complete/:done', (req, res) => {
  Todo.findByCompletion(req.params.done).then((todoList) => {
    res.status(200).json(todoList);
  });
});

router.post('/', (req, res) => {
  Todo.add({ ...req.body, completed: 0 }).then((List) => {
    res.status(200).json(List);
  });
});

router.put('/:id/toggle', (req, res) => {
  Todo.findById(req.params.id)
    .then((old) => {
      if (old.completed == 0) {
        Todo.update(req.params.id, { ...old, completed: 1 })
          .then(() => {
            res.status(200).json(`Updated item with ID: ${req.params.id}`);
          })
          .catch((err) => {
            // console.log('failed here 1');
            res.send(err);
          });
      } else {
        Todo.update(req.params.id, { ...old, completed: 0 })
          .then(() => {
            res.status(200).json(`Updated item with ID: ${req.params.id}`);
          })
          .catch((err) => {
            // console.log('failed here 2');
            res.send(err);
          });
      }
    })
    .catch((err) => {
      // console.log('failed here 3');
      res.status(400).json(`Error, no Item with ID: ${req.params.id}`);
    });
});

router.put('/:id', (req, res) => {
  Todo.update(req.params.id, req.body).then((newItem) => {
    res.status(200).json(newItem);
  });
});

router.delete('/:id', (req, res) => {
  Todo.remove(req.params.id).then((item) => {
    res.status(200).json(item);
  });
});

module.exports = router;
