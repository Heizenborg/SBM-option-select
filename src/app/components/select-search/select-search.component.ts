import { Component, OnInit, Input} from '@angular/core';
import { ChipComponent } from '../chip/chip.component';

@Component({
  selector: 'select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss']
})
export class SelectSearchComponent implements OnInit {

  @Input() chips: string[] = [];
  @Input() label: string;
  open: boolean = false;
  loading: boolean;


  constructor() { }

  ngOnInit() {
    this.label = "Site";
    this.chips = ["Apple", "Microsoft","CRBE"];
  }

  public openSelect() {
    this.open = !this.open;
    this.loading = true;
  }

  public getValue(event) {
    for (let index = 0; index < this.chips.length; index ++) {
      if (this.chips[index] === event) {
        this.chips.splice(index, 1);
      }
    }
  }

}
