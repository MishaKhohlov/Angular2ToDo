import { Component, OnInit, ViewChild } from '@angular/core';
import { AboutTestChildComponent } from '../about-test-child/about-test-child.component';
@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // access to child component
  @ViewChild(AboutTestChildComponent)
  private counterComponent: AboutTestChildComponent;

  inputName = 'Tom';
  inputAge = 1;
  newCounter = 2;

  constructor() {
    // Do stuff
  }

  increment() {
    this.counterComponent.counterChild++;
  }

  decrement() {
    this.counterComponent.counterChild--;
  }

  onChange(val) {
    console.log(val);
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
