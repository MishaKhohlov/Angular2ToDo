import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todoShow = true;
  myFormOpen = false;

  todoOpen() {
    this.todoShow = !this.todoShow;
  }

  formOpen() {
    this.myFormOpen = !this.myFormOpen;
  }

  ngOnInit() {

  }

  logged(name) {
    console.log('Todo item added ' + name);
  }

}
