import React, { useState } from 'react';

import Header from './components/header/Header';
import TodoList from './components/todolist/TodoList';
import TodoItemForm from './components/todoitemform/TodoItemForm';

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewTodo = (newItem) => {
    setTodoItems(todoItems => [...todoItems, newItem]);
  }

  const handleEditTodo = (editItem) => {
    let tempItems = [...todoItems];

    const editIndex = tempItems.findIndex(element => element.id === editItem.id);

    tempItems[editIndex] = editItem;

    setTodoItems([...tempItems]);

  }

  return (
    <div>
      <Header />
      <TodoList todoList={todoItems} editListFunc={handleEditTodo} />
      <TodoItemForm newTodo={handleNewTodo}/>
    </div>
  );
}

export default App;
