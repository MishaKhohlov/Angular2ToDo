import { Injectable } from '@angular/core';
import { todos } from '../data';
import { Todo } from '../todo';
import { LogService } from '../log.service';

@Injectable()
export class TodoServices {
  todos: Todo[] = todos;

  constructor(private LogService: LogService) {}

  getTodos(): Todo[] {
    this.LogService.write('Data get', false);
    return this.todos;
  }

  createTodo(title: string) {
    let todo: Todo = new Todo(title);
    todos.push(todo);
  }

  toogleTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTodo(todo: Todo) {
    let index = this.todos.indexOf(todo);
    return index > -1 ? this.todos.splice(index, 1) : null;
  }

}
