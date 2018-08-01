import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { ProductDataService } from './../product-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  constructor(
    private _productDataService: ProductDataService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this._route.paramMap.subscribe(params => {
      this.product = this._productDataService.showProduct(Number(params.get('id')));
    });
     }

  ngOnInit() {
  }

  update(event: Event): void {
    event.preventDefault();
    this._productDataService.updateProduct(this.product);
    this._router.navigate(['list']);
  }

}
