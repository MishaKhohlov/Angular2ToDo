import { todos } from '../data';
import { Todo } from '../todo';


export class TodoServices {
  todos: Todo[] = todos;

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(title: string) {
    let todo: Todo = new Todo(title);
    todos.push(todo);
  }

  toogleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    return index > -1 ? this.todos.splice(index, 1) : null;
  }

}
