import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';
import { todos } from '../shared/data';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todos: Todo[] = todos;

  ngOnInit() {

  }

  create(data: Todo) {
    console.log(data);
    this.todos.push(data);
  }

}
