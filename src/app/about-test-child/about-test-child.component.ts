import {
  Component,
  Input,
  OnInit,
  DoCheck,
  OnDestroy,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-about-test-child',
  templateUrl: './about-test-child.component.html',
  styleUrls: ['./about-test-child.component.scss']
})
export class AboutTestChildComponent implements
  OnInit,
  OnInit,
  DoCheck,
  OnDestroy,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit {

  @Input() setAge: string;
  @Input() name: string;
  @Input() counter: string;

  counterChild = 0;

  constructor() {
    // this.log(`constructor`);
  }

  ngOnInit() {
    // this.log('init');
    // load data from server
  }

  ngDoCheck() {
    // this.log('DoCheck вызывается при каждой проверке изменений свойств компонента');
  }

  ngAfterContentInit() {
    // this.log('AfterContentInit вызывается один раз после вставки содержимого в представление компонента кода');
  }

  ngAfterContentChecked() {
    // this.log('AfterContentChecked вызывается при проверке изменений содержимого, которое добавляется в представление компонента');
  }

  ngAfterViewInit() {
    // this.log('AfterViewInit вызывается после инициализации представления компонента, а также представлений дочерних компонентов. ');
  }

  ngAfterViewChecked() {
    // this.log('AfterViewChecked вызывается после проверки на изменения в представлении компонента, проверки представлений дочерних к.');
  }

  ngOnDestroy() {
    // call before remove component
    // this.log('ngOnDestroy вызывается перед тем, удалит компонент.');
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
    return msg;
    // console.log(msg);
  }
}

