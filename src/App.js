import React, { Component } from 'react'
import TodoList from './components/TodoComponent/TodoList'
import TodoForm from './components/TodoComponent/TodoForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      todos: [{
        //task:
        //id:
        //completed:false
      }],
      todo: ''
    }
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  addTask = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTask],
      todo:''
    })
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do</h1>
        <TodoList
          todos={this.state.todos} />
        <TodoForm
          todos={this.state.todos} 
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler} />
      </div>
    );
  }
}

export default App;
