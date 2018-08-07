import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChipComponent } from './components/chip/chip.component';
import { SelectSearchComponent } from './components/select-search/select-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    SelectSearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
