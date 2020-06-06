import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nge-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type = 'button';
  @Input() design = 'default';
  @Input() size = 'normal';
  @Input() color = '';
  @Input() disabled = false;

  constructor() { }

  ngOnInit() { }
}
