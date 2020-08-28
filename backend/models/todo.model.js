//Require mongoose
const mongoose = require("mongoose");

//Schema constant
const Schema = mongoose.Schema;

//setting a new schema
const todoSchema = new Schema({
  activity: { type: String, required: true },
});

//applying the new schema
const Todo = mongoose.model("Todo", todoSchema);

//exporting todo
module.exports = Todo;
