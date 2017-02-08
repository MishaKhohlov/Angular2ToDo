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

  constructor(private todoService: TodoServices) {
    this.todos = [];
  }

  ngOnInit() {
    setTimeout(() => {
      this.todos = this.todoService.getTodos();
    }, 300);
  }

  toggle(todo: Todo) {
    this.todoService.toogleTodo(todo);
  }

  deleteEv(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

}
