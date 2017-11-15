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
  },
  update(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: 'TodoItem not found',
          })
        }
        return todoItem
          .update({
            content: req.body.content || todoItem.content,
            complete: req.body.complete || todoItem.complete,
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  destroy(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId,
        },
      })
      .then(todoItem => {
        if (!todoItem) {
          return res.status(404).send({
            message: 'TodoItem not found',
          })
        }
        return todoItem
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  }
}
