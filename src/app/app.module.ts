import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NBAPlayerComponent } from './nbaplayer/nbaplayer.component';
import { HttpClientModule} from  '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NBAPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
