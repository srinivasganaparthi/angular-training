import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { of } from 'rxjs'


export class product {
  id: number | undefined;
  name: string | undefined;
  price: number | undefined;
  color: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: product[] | undefined;


  constructor(private http: HttpClient) {
    this.products = [
      { id: 1234, name: 'Apple Phone', price: 40000, color: 'blue' },
      { id: 1235, name: 'Samsung Phone', price: 35000, color: 'hazel' },
      { id: 1236, name: 'MI Phone', price: 20000, color: 'brown' }
    ];
  }

  getProducts(): Observable<product[] | undefined> {
    const products = of(this.products);
    return products;
  }

}
