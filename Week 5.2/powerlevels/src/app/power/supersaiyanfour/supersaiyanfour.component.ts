import { Component, OnChanges, Input } from '@angular/core';
import { HumanComponent } from '../human/human.component';

@Component({
  selector: 'app-supersaiyanfour',
  templateUrl: './supersaiyanfour.component.html',
  styleUrls: ['./supersaiyanfour.component.css']
})
export class SupersaiyanfourComponent implements OnChanges {
  @Input() power;

  ngOnChanges() {
    this.power = this.power * 500;
  }

}
