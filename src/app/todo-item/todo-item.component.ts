import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo';

@Component({
  selector: 'my-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() deleteEv = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onToggle() {
    this.toggle.emit(this.todo);
  }

  onDelete() {
    this.deleteEv.emit(this.todo);
  }

}
