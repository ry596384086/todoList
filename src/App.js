import React, { useState } from 'react';
import Header from './Header';
import './App.css';
import data from './data.json';
import TodoList from './TodoList';
import TodoInput from './TodoInput'

function App() {

  const [todoList, setTodoList] = useState(data)
  const [inputText, setInputText] = useState('')

  const handleToggle = (id) => {
    let newTodoList = todoList.map(todo => {
      if (todo.id === id)
        todo.complete = !todo.complete;
      return todo;
    })
    setTodoList(newTodoList);
  }

  const handleFilter = () => {
    let newTodoList = todoList.filter(todo => {
      return !todo.complete
    })
    setTodoList(newTodoList);
  }

  const handleChange = (e) => {
    setInputText(e.currentTarget.value)
  }
  
  const handleSubmit=(e)=> {
    e.preventDefault()
    addTodo(inputText)
    setInputText('')
  }

  const addTodo = (task)=>{
    let newTodoList=[...todoList,{id:todoList.length+1,task:task,complete:false}]
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <Header></Header>
      <TodoList todoList={todoList} handleToggle={handleToggle}
        handleFilter={handleFilter}>
      </TodoList>
      <TodoInput inputText={inputText} handleChange={handleChange} handleSubmit={handleSubmit}></TodoInput>
    </div>
  );
}

export default App;
