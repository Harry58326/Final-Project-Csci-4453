import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InactiveplayerComponent } from './inactiveplayer/inactiveplayer.component';
import { ActiveplayerComponent } from './activeplayer/activeplayer.component';
import { NBAPlayerComponent } from './nbaplayer/nbaplayer.component';
import { NewrequestComponent } from './newrequest/newrequest.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'inactive', component: InactiveplayerComponent},
  {path:'active', component: ActiveplayerComponent},
  {path: 'player', component: NBAPlayerComponent},
  {path: 'newrequest', component: NewrequestComponent},
  {path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
