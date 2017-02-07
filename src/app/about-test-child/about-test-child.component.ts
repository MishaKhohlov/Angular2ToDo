import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'my-about-test-child',
  templateUrl: './about-test-child.component.html',
  styleUrls: ['./about-test-child.component.scss']
})
export class AboutTestChildComponent implements OnInit, OnDestroy, OnChanges {
  @Input() setAge: string;
  @Input() name: string;
  @Input() counter: string;

  constructor() {
    this.log(`constructor`);
  }

  ngOnInit() {
    // load data from server
  }

  ngOnDestroy() {
    // call before remove component
  }

  ngOnChanges(changes) {
    // call before ngOnInit and when props changed(only input)

    for (let propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        let chng = changes[propName];
        let cur = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
  }

  log(msg: string) {
    console.log(msg);
  }
}

