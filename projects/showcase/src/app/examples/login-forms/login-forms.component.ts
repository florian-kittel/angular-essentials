import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.scss']
})
export class LoginFormsComponent implements OnInit {
  public form: FormGroup;

  public errorMessages = {
    email:
    {
      required: 'First name is required.',
      minlength: 'Name must be at least 4 characters long.'
    },
    password:
    {
      required: 'Last name is required',
      minlength: 'Name must be at least 4 characters long.'
    },
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [
        { value: null, disabled: false },
        { validators: Validators.compose([Validators.required, Validators.email]), updateOn: 'blur' }
      ],
      password: [
        null,
        { validators: Validators.compose([Validators.required]), updateOn: 'blur' }
      ],
      info: ['This is a read-only message']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {

    } else {
      this.markAsirtyAndTouched(this.form);
    }
  }

  markAsirtyAndTouched(form: FormGroup) {
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
      control.markAsDirty();

      if ((control as any).controls) {
        this.markAsirtyAndTouched(control as FormGroup);
      }
    });
  }
}
