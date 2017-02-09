import { Component } from '@angular/core';

class User {
  constructor(public title = '',
              public email = '',
              public phone = -1,
              public company = '') {
  }
}

@Component({
  selector: 'my-form',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormComponent {
  user: User = new User();

  companies: string[] = [
    'item1',
    'item2',
    'item3',
    'item4'
  ];

  phones: Object[] = [];

  constructor() {

  }

  addPhone(elem) {
    const newObj = Object.assign({}, this.user);
    this.phones.push(newObj);
    elem.forEach(item => item.reset());
    this.user = new User();
    console.log(this.phones);
  }

}
