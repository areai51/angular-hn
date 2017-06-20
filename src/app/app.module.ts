import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListingComponent } from './listing/listing.component';
import { HnComponentsModule } from './hn-components.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule, HttpModule, HnComponentsModule, BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
