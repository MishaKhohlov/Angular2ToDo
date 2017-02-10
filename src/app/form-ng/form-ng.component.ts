import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'my-form-ng',
  templateUrl: './form-ng.component.html',
  styleUrls: ['./form-ng.component.scss']
})
export class FormNgComponent {
  myForm: FormGroup;
  phones = [];

  constructor() {
    this.myForm = new FormGroup({
      'userName': new FormControl('Tom', [
        Validators.required,
        this.userNameValidator
      ]),
      'userEmail': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
      ]),
      'userPhone': new FormControl('', [this.userPhoneValidator]),
      'phones': new FormArray([
        new FormControl("+7", Validators.required)
      ])
    });
    console.log(this.myForm);
  }

  addPhone(){
    (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+8", Validators.required));
  }

  userNameValidator(control: FormControl) {
    if (control.value === 'нет') {
      return {'userName': true};
    }
    return null;
  }

  userPhoneValidator(control: FormControl) {

    console.log(control.value);
    if (control.value === '123') {
      return {'userName': true};
    }
    return null;
  }

  onSubmit(ev: any, form: NgForm) {
    ev.preventDefault();
    console.log(form.value.name, form.value.email, form.value.phone);
    form.reset();
  }

  onSubmit2() {
    const form = this.myForm;
    console.log(form.value.name, form.value.email, form.value.phone);
  }
}
