This application is the backend of the tracker application. It uses Mongoose, Express, Cors, dotenv, and body-parser modules.

# Functionalities

This app receives requests from the frontend to post and get data. This server is responsible to recognize routes and types of requests, and uses Mongoose to connect on Atlas MongoDB.

* ./models/todo.models.js contais the MongoDB Schema
* ./routes/todos.js contains the routes and it is responsible to distinguish among them to get, update, delete, and post data from/to the frontend to the Database.
* /.env contains the variable that stores the string to connect on the MongoDB Database.
* /server.js is the main file.

To use this aplication, you need to have Node,js on your computer. Inside the frontend folder, execute the command "npm install", and then "npm start".



