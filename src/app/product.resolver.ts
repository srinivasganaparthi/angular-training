import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Product, ProductsService } from './products.service';


@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<any> {

    constructor(private service: ProductsService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Product[] | undefined> {
        return this.service.getProducts();
    }
}
