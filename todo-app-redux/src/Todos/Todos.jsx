import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../store/action-creators';
import './Todo.css';

const Todos = ({ todos, getTodos }) => {
  useEffect(() => { getTodos() }, [getTodos]);

  return (
    <div className='list'>
      {todos.map((todo, index) => (
        <div key={index} className='todo'>{todo}</div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  getTodos: () => { dispatch(getTodos()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
