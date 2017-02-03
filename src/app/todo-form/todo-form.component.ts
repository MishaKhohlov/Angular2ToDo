import { Component, Output, EventEmitter  } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
    selector: 'my-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {
  title = '';

  @Output() add = new EventEmitter();

  onSubmit() {
    let todo: Todo = new Todo(this.title);
    this.add.emit(todo);
    this.title = '';
  }
}
