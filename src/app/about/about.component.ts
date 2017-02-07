import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  inputName = 'Tom';
  inputAge = 1;
  newCounter = 2;

  constructor() {
    // Do stuff
  }

  onChange(val) {
    console.log(val);
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
