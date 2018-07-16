import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors: Array<String> = [
    'red',
    'blue',
    'green',
    'orange',
    'yellow',
    'pink',
    'purple'
  ];
  random() {
    return Math.floor(Math.random() * this.colors.length);
  }
}
