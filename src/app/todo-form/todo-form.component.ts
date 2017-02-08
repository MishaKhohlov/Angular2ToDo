import { Component, Output, EventEmitter } from '@angular/core';

import { TodoServices } from '../shared/todo.service/todo.service';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title = '';

  @Output() log = new EventEmitter();

  constructor(private todoService: TodoServices) {
  }

  onSubmit() {
    this.log.emit(this.title);
    this.todoService.createTodo(this.title);
    this.title = '';
  }
}
