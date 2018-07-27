import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {

  @Input() quotes;

  @Output() addQuoteEvent = new EventEmitter();

  newQuote = { body: '', author: '' };

  constructor() { }

  ngOnInit() {
  }
  onSubmit(quoteForm) {
    console.log(quoteForm);
    console.log(this.newQuote);
    this.addQuoteEvent.emit(this.newQuote);
    this.newQuote = { body: '', author: '' };
  }
}
