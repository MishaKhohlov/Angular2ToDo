import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-about-child',
  templateUrl: './about-child.component.html',
  styleUrls: ['./about-child.component.scss']
})
export class AboutChildComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  @Input() name: string;
  _age: number;

  @Input()
  set setAge(age: number) {
    if (age < 0) {
      this._age = 0;
    } else if (age > 100) {
      this._age = 100;
    } else {
      this._age = age;
    }
  }

  get setAge() {
    return this._age;
  }

  // two way binding

  @Input() counter;
  @Output() counterChange = new EventEmitter();
  onCounterChange() {
    this.counter = ++this.counter;
    this.counterChange.emit(this.counter);
  }

  change(ev) {
    this.onChange.emit(ev.target.checked);
  }

  constructor() {
    // Do stuff
  }

  ngOnInit() {

  }

}
