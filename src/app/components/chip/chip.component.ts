import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input()
  value: string;
  @Input()
  editable:boolean = true;
  @Output()
  toRemove: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  private removeChip(value) {
    console.log("remove: ", value);
    this.toRemove.emit(value);
  }

}
