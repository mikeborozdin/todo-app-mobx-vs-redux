import { observable, action } from 'mobx';

export default class TodoStore {
  @observable
  todos = []

  @action
  async addTodo(todo) {
    await fetch('http://localhost:9999/todos', {
      method: 'post',
      body: todo
    });

    this.getTodos();
  }

  @action
  async getTodos() {
    const res = await fetch('http://localhost:9999/todos');

    const { todos } = await res.json();

    this.todos = todos;
  }
}
