import { Component, OnInit } from '@angular/core';
import { Note } from '../../note';
import { NoteService } from '../../notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Array<Note> = [];

  constructor(private noteService: NoteService) {
    this.noteService.notes.subscribe(
      notes => this.notes = notes.reverse()
    );
   }

  ngOnInit() {
    this.noteService.get();
  }
}
