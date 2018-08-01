import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private _productDataService: ProductDataService) { }

  ngOnInit() {
    this._productDataService.products.subscribe(data => {
      this.products = data;
    });
  }

  delete = (product: Product): void => {
    this._productDataService.delete(product);
  }

}
