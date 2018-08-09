import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';


@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {

  constructor(private _playerService: PlayersService) {
    this._playerService.getPlayers();
   }

  ngOnInit() {
    this._playerService.players.subscribe(
      players => this.players = players,
      error => console.log(error)
    );
  }
  deletePlayer(player): void {
    console.log(player);
    this._playerService.deletePlayer(player);
  }

}
