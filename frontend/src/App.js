//Import React features and bootstrap
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Import all the components and set routing among them
import Navbar from "./components/navbar.component";
import TodosList from "./components/todos-list.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={TodosList} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/update/:id" component={EditTodo} />
      </div>
    </Router>
  );
}

export default App;
