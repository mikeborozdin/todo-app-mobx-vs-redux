import { ADD_TODO, GET_TODOS } from './constants';

const initialState = {
  todos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    }
    case GET_TODOS: {
      return {
        ...state,
        todos: action.todos
      };
    }
    default:
      return state;
  }
};

export default todos;
