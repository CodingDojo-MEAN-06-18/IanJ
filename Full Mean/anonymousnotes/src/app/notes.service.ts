import { Injectable } from '@angular/core';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: BehaviorSubject<Array<Note>> = new BehaviorSubject([]);

  constructor(private _http: HttpClient) { }



  add(note: Note): void {
    this._http.post('/add', note).subscribe(
      data => {
        const notes = this.getNote();
        notes.push(data as Note);
        this.notes.next(notes);
      },
      err => console.log(err)
    );
  }

  get() {
    this._http.get('/get').subscribe(
      data => this.notes.next(data as Array<Note>),
      err => console.log(err)
    );
  }

  private getNote = (): Array<Note> => this.notes.getValue();
}
