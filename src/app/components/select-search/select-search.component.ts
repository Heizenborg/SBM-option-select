import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChipComponent } from '../chip/chip.component';
import { SearchItemComponent } from './search-item/search-item.component';

@Component({
  selector: 'select-search',
  templateUrl: './select-search.component.html',
  styleUrls: ['./select-search.component.scss']
})
export class SelectSearchComponent implements OnInit {

  @Input() chips: string[] = [];
  @Input() options: string[];
  @Input() label: string;
  @Output()
  searchParams: EventEmitter<string> = new EventEmitter<string> ();

  open: boolean = false;
  loading: boolean;
  searchValue: string = '';

  constructor() { }

  ngOnInit() {
    this.label = "Site";
    this.chips = [];
    this.options = ["Apple", "Microsoft","CBRE"]
  }

  public openSelect() {
    console.log("open/close");
    this.open = !this.open;
    this.loading = false;
  }

  public getValue(event) {
    for (let index = 0; index < this.chips.length; index ++) {
      if (this.chips[index] === event) {
        this.chips.splice(index, 1);
      }
    }
  }

  public getSearchValue(event) {
    if (event.length > 3) {
      console.log("search for: ", event);
      this.searchParams.emit(event);
    }
  }
  public chooseOption(event) {
    console.log("passback:", event);
    this.chips.push(event);
  }

}
