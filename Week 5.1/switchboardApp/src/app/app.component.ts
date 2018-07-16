import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = 'Switchboard';

  toggles: Boolean[] = [true, true, true, true, true, true, true, true, true, true];

  changeButton(i) {
    this.toggles[i] = !this.toggles[i];
  }
}
