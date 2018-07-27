import { Component, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnChanges {
  @Input() power;

  ngOnChanges() {
    this.power = this.power * 150;
  }

}
