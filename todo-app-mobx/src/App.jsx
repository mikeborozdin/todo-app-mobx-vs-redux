import React from 'react';
import NewTodo from './NewTodo/NewTodo';
import Todos from './Todos/Todos';
import './App.css';

const App = () => (
  <div className='app'>
    <NewTodo />
    <Todos />
  </div>
);

export default App;
