import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react'
import './Todo.css';

const Todos = ({ todoStore }) => {
  useEffect(() => { todoStore.getTodos() }, [todoStore]);

  return (
    <div className='list'>
      {todoStore.todos.map((todo, index) => (
        <div key={index} className='todo'>{todo}</div>
      ))}
    </div>
  );
};

export default inject(({ todoStore }) => ({ todoStore }))(observer(Todos));
