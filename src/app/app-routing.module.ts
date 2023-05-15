import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './page/category/category.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';

const routes: Routes = [
  {path:``,component:HomeComponent},
  {path: `category`, component:CategoryComponent},
  {path:`products`, component: ProductsComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
