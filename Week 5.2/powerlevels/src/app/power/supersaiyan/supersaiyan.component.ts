import { Component, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnChanges {
  @Input() power;
  ngOnChanges() {
    this.power = this.power * 90;
  }

}
