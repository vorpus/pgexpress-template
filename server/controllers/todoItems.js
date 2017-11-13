const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    console.log(req.params.todoId);
    return TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId,
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return TodoItem
      .all()
      .then(todoItems => res.status(200).send(todoItems))
      .catch(error => res.status(400).send(error))
  }
}
