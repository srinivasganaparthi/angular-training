import { Component, OnInit } from '@angular/core';
import { product, ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  products: product[] | undefined;

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

}
