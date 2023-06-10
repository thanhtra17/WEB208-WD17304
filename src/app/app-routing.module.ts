import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryComponent } from './page/category/category.component';
import { HomeComponent } from './page/home/home.component';
import { ProductsComponent } from './page/products/products.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {path:``,component:HomeComponent},
  {path: `category`, component:CategoryComponent},
  {path:`products`, component: ProductsComponent },
  {path:`login`, component:LoginComponent},
  {path:`register`, component:RegisterComponent},
  {path: "product-create", component:ProductCreateComponent},
  {path: "product-detail", component:ProductUpdateComponent},
  {path: "product-update/:id", component:ProductUpdateComponent},

  { 
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: ``, redirectTo: `dashboard`, pathMatch: `full` },
      { path: `dashboard`, component: DashboardComponent },
  
        
      ]}
  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
