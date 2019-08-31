import { Component, OnInit, Input, HostBinding, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BaseForm } from '../base-from.class';

@Component({
  selector: 'nge-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends BaseForm implements OnInit {
  @HostBinding('attr.id') externalId = '';
  @HostBinding('class') class = 'nge-input';

  @Input() type = 'text';

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {
    if (this.externalId) {
      this.id = this.externalId;
    }
  }


}
