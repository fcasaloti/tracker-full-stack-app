//Import React components, Link, and Axios
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Constant to create buttons to delete, edit, and strikethrough
const Todo = props => (
  <tr className="d-flex">
    <td className='col-9' id={ props.todo._id }>{props.todo.activity}</td>
    <td className='col-3' style={{textAlign:"right"}}>
      <button onClick={() => { props.deleteTodo(props.todo._id) }} >delete</button> |
        <Link to={'/update/' +  (props.todo._id)}>
      <button>edit</button></Link> |
      <button onClick={() => { props.strike(props.todo._id, props.todo.activity) }} >StrikeThrough</button>
    </td>
  </tr>
)

//Class to list all the tasks
export default class TodosList extends Component {
   constructor(props) {
     super(props);

    this.deleteTodo = this.deleteTodo.bind(this)

    this.state = {
      todos: [],
    };
   }

   strikeTodo(id, activity){
      document.getElementById(id).innerHTML = `<del>${activity}</del>`;
   }

  componentDidMount() {
    axios.get('http://localhost:5000/todos/')
      .then(response => {
        this.setState({ todos: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteTodo(id) {
    axios.delete('http://localhost:5000/todos/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      todos: this.state.todos.filter(el => el._id !== id)
    })
  }

  todoList() {
    return this.state.todos.map(currenttodo => {
      return <Todo todo={currenttodo} 
      deleteTodo={this.deleteTodo} key={currenttodo._id}
      strike={this.strikeTodo}
      />;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Todos</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            { this.todoList() }
          </tbody>
            <tbody><p></p></tbody>
        </table>
      </div>
    )
  }
}