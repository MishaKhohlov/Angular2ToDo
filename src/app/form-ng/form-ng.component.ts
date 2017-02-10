import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-form-ng',
  templateUrl: './form-ng.component.html',
  styleUrls: ['./form-ng.component.scss']
})
export class FormNgComponent {
  onSubmit(ev:any, form: NgForm) {
    ev.preventDefault();
    console.log(form.value.name, form.value.email, form.value.phone);
    form.reset();

  }
}
