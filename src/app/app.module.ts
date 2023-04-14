import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NBAPlayerComponent } from './nbaplayer/nbaplayer.component';
import { NBAComponent } from './nba/nba.component';

@NgModule({
  declarations: [
    AppComponent,
    NBAPlayerComponent,
    NBAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
