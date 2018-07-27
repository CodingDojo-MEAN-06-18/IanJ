import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;
  @Output() destroyQuoteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  delete(quote) {
    this.destroyQuoteEvent.emit(quote);
  }
}
