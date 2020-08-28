//Modules required
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//App use
app.use(cors());
app.use(express.json());

//Setting connection with Mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Setting routes
const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);

//Listening
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
