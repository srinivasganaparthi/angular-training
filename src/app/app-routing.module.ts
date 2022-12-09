import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductResolver } from './product.resolver';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [{ path: 'about', component: AboutComponent },
{
  path: 'products', component: ProductsComponent, resolve: {
    products: ProductResolver
  }
},
{ path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
