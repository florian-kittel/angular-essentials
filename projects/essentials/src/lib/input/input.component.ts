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

  // tslint:disable-next-line: no-input-rename
  @HostBinding('class.nge-input') @Input('class') classList = 'nge-input';

  @Input() type = 'text';

  constructor(@Optional() @Self() public ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit() {
    if (this.externalId) {
      this.id = this.externalId;
    }

    this.classList = `${this.classList}`;
  }

}
