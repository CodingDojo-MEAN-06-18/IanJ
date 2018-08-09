import { Component, OnInit } from '@angular/core';
import { Note } from '../../note';
import { NgForm } from '@angular/forms';
import { NoteService } from '../../notes.service';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  content: Note = new Note();

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm): void {
    this.noteService.add(this.content);
    event.preventDefault();
    form.reset();
  }
}
