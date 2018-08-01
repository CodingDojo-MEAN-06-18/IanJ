import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  username: '';
  score = 0;
  userExists = true;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
  }
  OnSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('form submitted');
    this.githubService.getGithubUser(this.username)
      .subscribe(
        (response) => {
          this.score = response['public_repos'] + response['followers'];
          console.log(this.score);
        },
        (err) => { this.userExists = false; console.log(err); }
    );
    this.userExists = true;
    form.reset();
  }

}
