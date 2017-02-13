import { Component } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'my-form-ng',
  templateUrl: './form-ng.component.html',
  styleUrls: ['./form-ng.component.scss']
})
export class FormNgComponent {
  myForm: FormGroup;
  phones = [];

  constructor(private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      'userName': ['Tom', [Validators.required, this.userNameValidator]],
      'userEmail': ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}')
      ]],
      'userPhone': ['', [this.userPhoneValidator]],
      'phones': formBuilder.array([
        ['+7', Validators.required]
      ])
    });

  }

  addPhone() {
    (<FormArray>this.myForm.controls['phones']).push(new FormControl('+8', [Validators.required, this.userPhoneValidator]));
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
      return {'userPhone': true};
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
