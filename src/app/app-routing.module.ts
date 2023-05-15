import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryComponent } from './page/category/category.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';

const routes: Routes = [
  {path:``,component:HomeComponent},
  {path: `category`, component:CategoryComponent},
  {path:`products`, component: ProductsComponent },
  {path:`login`, component:LoginComponent},
  {path:`register`, component:RegisterComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
