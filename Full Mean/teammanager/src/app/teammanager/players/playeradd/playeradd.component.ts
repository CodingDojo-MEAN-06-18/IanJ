import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlayersService } from '../../players.service';

@Component({
  selector: 'app-playeradd',
  templateUrl: './playeradd.component.html',
  styleUrls: ['./playeradd.component.css']
})
export class PlayeraddComponent implements OnInit {
  positions: Array<string> = [
    'Forward',
    'Midfielder',
    'Goalkeeper',
    'Sweeper',
    'Stopper',
    'Striker',
    'Back',
  ];
  name: string = '';
  position: string = '';

  constructor(private _playerService: PlayersService) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    this._playerService.add(this.name, this.position);
    form.reset();
  }

}
