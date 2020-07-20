import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot([])  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
