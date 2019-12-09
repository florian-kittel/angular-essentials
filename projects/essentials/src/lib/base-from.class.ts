import { DoCheck, Input, Output, Optional, Self, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl, FormControl } from '@angular/forms';

export abstract class BaseForm implements ControlValueAccessor, DoCheck {

  @Input() errorMessages: { [key: string]: string } = {};
  @Input() placeholder = '';
  @Input() label = '';
  @Input() readonly = false;

  // tslint:disable-next-line: no-output-native
  @Output() change = new EventEmitter();

  public id = 'i' + Math.random().toString().replace('0.', '');
  public value: any;

  public disabled = false;
  public required = false;
  public isFocused = false;
  public validators = null;
  public errorCheckOnFirstFocus = false;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngDoCheck() {
    if (this.ngControl && this.ngControl.control instanceof FormControl) {
      this.validators = this.ngControl.control.validator && this.ngControl.control.validator(new FormControl(''));
      this.required = (this.validators && this.validators.hasOwnProperty('required'));
    }
  }

  onChange = (value: any) => { };
  onTouched = (value: any) => { };

  writeValue(value: any): void {
    this.value = value;
    this.onChange(this.value);
    this.onTouched(this.value);
    this.change.emit(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  onFocus: any = () => {
    this.isFocused = true;
    if (this.ngControl && (this.ngControl.control.dirty || this.ngControl.control.touched)) {
      this.errorCheckOnFirstFocus = true;
    }
  }

  onTouch: any = (value) => {
    this.onTouched(value);
  }

  onBlur: any = () => {
    this.onTouched(this.value);
    this.isFocused = false;
    this.errorCheckOnFirstFocus = true;
    if (this.ngControl) {
      this.ngControl.control.markAllAsTouched();
      this.ngControl.control.markAsDirty();
    }
  }

  get hasErrors() {
    return (
      (!this.isFocused || this.errorCheckOnFirstFocus) &&
      this.ngControl &&
      this.ngControl.control &&
      this.ngControl.control.invalid &&
      (this.ngControl.control.dirty || this.ngControl.control.touched) &&
      this.ngControl.control.errors !== null
    );
  }

}
