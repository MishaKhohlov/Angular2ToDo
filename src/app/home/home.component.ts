import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {

  }

  logged(name) {
    console.log('Todo item added ' + name);
  }

}
