import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {

  public form: FormGroup;

  public errorMessages = {
    myInput:
    {
      required: 'This field is required.',
      minlength: 'The value must be at least 4 characters long.'
    }
  };

  public options = [
    {
      label: 'Angular.io',
      value: '1'
    },
    {
      label: 'angular-essentials.com',
      value: '2'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      myInput: [
        { value: null, disabled: false },
        { validators: Validators.compose([Validators.required, Validators.minLength(4)]), updateOn: 'blur' }
      ]
    });
  }

  ngOnInit() {
  }

}
