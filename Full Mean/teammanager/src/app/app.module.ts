import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PlayersService } from './players.service';

import { TeammanagerComponent } from './teammanager/teammanager.component';
import { GameComponent } from './teammanager/game/game.component';
import { PlayerAddComponent } from './teammanager/players/playeradd/playeradd.component';
import { PlayerListsComponent } from './teammanager/players/playerlist/playerlist.component';


@NgModule({
  declarations: [
    AppComponent,
    TeammanagerComponent,
    GameComponent,
    AddplayerComponent,
    ListplayersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
