import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/action-creators';
import './NewTodo.css';

const NewTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  return (
    <div>
      <input
        type='text'
        onChange={e => setTodo(e.target.value)}
        placeholder='New todo item...'
        className='new-todo' />

      <button
        onClick={() => addTodo(todo)}
        className='new-todo-button'>
          Add a new todo
        </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(null, mapDispatchToProps)(NewTodo);
