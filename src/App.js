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

  removeItems = event => {
    event.preventDefault()
    this.setState(prevState => {
      return {
        todos: prevState.todos.filter(todo => {
          return !todo.completed
        })
      }
    })
  }

  toggleComplete = itemId => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === itemId){
        todo.completed = !todo.completed
      }
      return todo
    })
    this.setState({todos, todo: ''})
  }

  render() {
    return (
      <div className="App">
        <h1>To-Do</h1>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete} />
        <TodoForm
          todos={this.state.todos} 
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler} 
          addTask={this.addTask} 
          removeItem={this.removeItems} />
      </div>
    );
  }
}

export default App;
