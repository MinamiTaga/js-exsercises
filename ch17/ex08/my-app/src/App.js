import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([
      { id: Date.now(), text: newTodo.trim(), completed: false },
      ...todos,
    ]);
    setNewTodo('');
  };
  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='App'>
      <head>
        <title>Simple ToDo</title>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <script type='module' src='/ch15.01-03/ex01/index.js'></script>
      </head>
      <body>
        <form id='new-todo-form' onSubmit={addTodo}>
          <input
            type='text'
            id='new-todo'
            placeholder='What needs to be done?'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
        <ul id='todo-list'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => handleToggleComplete(todo.id)}
              />
              <label
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {todo.text}
              </label>
              <button onClick={() => deleteTodo(todo.id)}>❌</button>
            </li>
          ))}
        </ul>
      </body>
    </div>
  );
}

export default App;
