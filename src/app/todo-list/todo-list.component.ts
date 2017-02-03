import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';

import { TodoServices } from '../shared/todo.service/todo.service';

@Component({
  selector: 'my-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoService: TodoServices;

  constructor(todoService: TodoServices) {
    this.todoService = todoService;
    this.todos = [];
  }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  delete(index: number) {
    this.todos.splice(index, 1);
  }
}
