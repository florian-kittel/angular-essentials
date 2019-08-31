import { Component, OnInit, Input, forwardRef, HostBinding } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nge-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  val = '';
  @HostBinding('attr.id') externalId = '';
  @HostBinding('class') class = 'nge-input';

  set value(val) {  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  public isFocused = false;


  @Input() type = 'text';
  // @Input() value = '';
  @Input() placeholder = '';
  @Input() label = '';

  public id = 'i';

  constructor() {
    this.id = this.externalId || this.id + Math.random().toString().replace('0.', '');
  }

  ngOnInit() {
  }

  onChange: any = () => { };
  onTouch: any = () => { };
  onFocus: any = () => {
    this.isFocused = true;
  }

  onBlur: any = () => {
    this.onTouch(this.value);
    this.isFocused = false;
  }

  writeValue(value: any) {
    this.value = value;
    this.onChange(this.value);
    this.onTouch(this.value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void;

}
