import { Component, forwardRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
