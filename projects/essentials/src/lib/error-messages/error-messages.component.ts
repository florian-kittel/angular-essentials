import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nge-error-messages',
  templateUrl: './error-messages.component.html',
  styleUrls: ['./error-messages.component.scss']
})
export class ErrorMessagesComponent implements OnInit {

  @Input() errorMessages;
  @Input() set errors(errors) {
    console.log(errors);
    if (errors) {
      this.error = Object.keys(errors)[0] || null;
    } else {
      this.error = null;
    }
  }

  error = null;

  constructor() { }

  ngOnInit() {
    console.log(this.errorMessages);
  }

  getMessage() {
    console.log(this.error, this.errorMessages, this.errorMessages[this.error]);
    if (this.error) {
      return this.errorMessages[this.error] || '';
    }
    return '';
  }
}
