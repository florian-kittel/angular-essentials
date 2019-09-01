import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public form: FormGroup;

  public errorMessages = {
    firstName:
    {
      required: 'First name is required.',
      minlength: 'Name must be at least 4 characters long.'
    },
    lastName:
    {
      required: 'Last name is required',
      minlength: 'Name must be at least 4 characters long.'
    },
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: [
        { value: null, disabled: false },
        { validators: Validators.compose([Validators.required, Validators.minLength(4)]), updateOn: 'blur' }
      ],
      lastName: [
        null,
        { validators: Validators.compose([Validators.required, Validators.minLength(4)]), updateOn: 'blur' }
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
