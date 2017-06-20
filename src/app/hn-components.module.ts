
import { NgModule } from '@angular/core';
import {MdButtonModule, MdToolbarModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdToolbarModule,MdCardModule],
  exports: [MdButtonModule, MdToolbarModule,MdCardModule],
})
export class HnComponentsModule { }