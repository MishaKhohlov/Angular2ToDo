import { Component } from '@angular/core';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Angular 2';
  url = 'https://my-link.com';
}
