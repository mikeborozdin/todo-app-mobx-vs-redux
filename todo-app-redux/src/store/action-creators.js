import { GET_TODOS } from './constants';

export const addTodo = (todo) => {
  return async (dispatch) => {
    await fetch('http://localhost:9999/todos', {
      method: 'post',
      body: todo
    });

    dispatch(getTodos());
  };
};

export const getTodos = () => {
  return async (dispatch) => {
    const res = await fetch('http://localhost:9999/todos');

    const { todos } = await res.json();

    dispatch({
      type: GET_TODOS,
      todos
    });
  };
};
