import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  product: Product = new Product();

  constructor(private _ProductDataService: ProductDataService, private _router: Router) { }

  ngOnInit() {

  }

  create = (event: Event): void => {
    event.preventDefault();
    this._ProductDataService.add(this.product);
    this._router.navigate(['list']);
  }

}
