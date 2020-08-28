//Modules required
const router = require("express").Router();
let Todo = require("../models/todo.model");

//Route from "/" to get the list of the all tasks
router.route("/").get((req, res) => {
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Route from "/add" to post new tasks to the database
router.route("/add").post((req, res) => {
  const activity = req.body.activity;

  const newTodo = new Todo({
    activity,
  });

  newTodo
    .save()
    .then(() => res.json("Todo added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Route from a specific ID to get specific task.
router.route("/:id").get((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Route from a specific id to update the task name on the database
router.route("/update/:id").post((req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      todo.activity = req.body.activity;

      todo
        .save()
        .then(() => res.json("Todo updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//exporting router
module.exports = router;
