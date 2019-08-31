import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nge-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() value = '';
  @Input() placeholder = '';
  @Input() label = '';

  @Input() options: { label: string; value: string }[];

  public id = 'i';

  constructor() {
    this.id = this.id + Math.random().toString().replace('0.', '');
  }

  ngOnInit() {
  }

}
