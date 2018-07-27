import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    { body: 'Get busy living or get busy dying.', author: 'Stephen King' },
    { body: 'It is hard to fail, but it is worse never to have tried to succeed.', author: 'Theodore Roosevelt' }
  ];

  addQuote(quote) {
    console.log(quote);
    this.quotes.push(quote);
  }
  destroyQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }
}
