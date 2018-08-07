import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() value: string;
  @Output()
  selection: EventEmitter<any> = new EventEmitter<any>();

  public selectValue(value) {
    this.selection.emit(value);
  }
}
