import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NBAPlayerComponent } from './nbaplayer/nbaplayer.component';
import { HttpClientModule} from  '@angular/common/http';
import { RequestCardComponent } from './request-card/request-card.component';
import { HomeComponent } from './home/home.component';
import { InactiveplayerComponent } from './inactiveplayer/inactiveplayer.component';
import { ActiveplayerComponent } from './activeplayer/activeplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    NBAPlayerComponent,
    RequestCardComponent,
    HomeComponent,
    InactiveplayerComponent,
    ActiveplayerComponent
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
