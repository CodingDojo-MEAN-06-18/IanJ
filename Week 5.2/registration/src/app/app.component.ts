import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Registration';

  user = new User();

  pw_confirm: boolean = null;

  valid: boolean = false;

  users: Array<User> = [];

  submit = (event: Event, form: NgForm) => {
    event.preventDefault();
    this.pw_confirm = this.user.password === form.controls['confirm_pw'].value;
    if (this.pw_confirm) {
      this.users.push(this.user);
      this.user = new User();
      form.reset();
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
}
