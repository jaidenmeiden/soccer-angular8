import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {environment} from "../environments/environment";
import {PlayerService} from "./services/player.service";
import {TeamService} from "./services/team.service";
import { TeamTableComponent } from './components/team-table/team-table.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamTableComponent,
    PlayerTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    PlayerService,
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
