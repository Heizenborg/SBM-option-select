import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChipComponent } from './components/chip/chip.component';
import { SelectSearchComponent } from './components/select-search/select-search.component';
import { SearchItemComponent } from './components/select-search/search-item/search-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    SelectSearchComponent,
    SearchItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
