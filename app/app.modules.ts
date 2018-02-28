import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './component.app';
import { ContactItemComponent } from './component.contact-item';
import { ContactDetailsComponent } from './component.contact-details';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, ContactItemComponent, ContactDetailsComponent, SearchPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}