import React from 'react';
import NewTodo from './NewTodo/NewTodo';
import Todos from './Todos/Todos';
import './App.css';

const App = () => (
  <div className='app'>
    <h1 class="header">ToDo MobX</h1>
    <NewTodo />
    <Todos />
  </div>
);

export default App;
