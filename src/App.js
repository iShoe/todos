
import React, { useState } from 'react'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import { v1 as uuid } from "uuid";

function App() {

  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: 'Clean room',
      completed: false
    },
    {
      id: uuid(),
      title: 'Order dinner',
      completed: false
    }, {
      id: uuid(),
      title: 'Walk the dog',
      completed: false
    }
  ])

  const markComplete = (id) => {
    const updatedTodos = todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    setTodos(updatedTodos)
  }

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    const updatedTodos = [...todos, newTodo]
    //console.log(updatedTodos)
    setTodos(updatedTodos)

  }

  return (

    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} markComplete={markComplete} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
