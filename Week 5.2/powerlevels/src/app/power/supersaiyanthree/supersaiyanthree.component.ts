import { Component, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnChanges {
  @Input() power;

  ngOnChanges() {
    this.power = this.power * 500;
  }

}
