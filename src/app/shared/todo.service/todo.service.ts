import { Injectable } from '@angular/core';
import { todos } from '../data';
import { Todo } from '../todo';
import { LogService } from '../log.service';
import { Http, Response } from '@angular/http';

@Injectable()
export class TodoServices {
  todos: Todo[] = todos;

  constructor(private LogService: LogService, private http: Http) {
  }

  getUsers() {
    this.http.get('http://echo.jsontest.com/key/value/one/two')
      .map(data => data.json())
      .subscribe((people: Response) => {
        console.log(people);
      }, (error: any) => {
        console.log('Error response', error);
      });
  }

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
