import { Component, Output, EventEmitter } from '@angular/core';

import { TodoServices } from '../shared/todo.service/todo.service';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title = '';
  todoService: TodoServices;

  @Output() log = new EventEmitter();

  constructor(todoService: TodoServices) {
    this.todoService = todoService;
  }

  onSubmit() {
    this.log.emit(this.title);
    this.todoService.createTodo(this.title);
    this.title = '';
  }
}
