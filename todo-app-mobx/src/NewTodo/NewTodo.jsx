import React, { useState } from 'react';
import { inject } from 'mobx-react';
import './NewTodo.css';

const NewTodo = ({ todoStore }) => {
  const [todo, setTodo] = useState('');

  return (
    <div>
      <input
        type='text'
        onChange={e => setTodo(e.target.value)}
        placeholder='New todo item...'
        className='new-todo' />

      <button
        onClick={() => todoStore.addTodo(todo)}
        className='new-todo-button'>
        Add a new todo
      </button>
    </div>
  );
};


export default inject(({ todoStore }) => ({ todoStore }))(NewTodo);
