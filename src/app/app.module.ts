import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FootterComponent } from './components/footter/footter.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CategoryComponent } from './page/category/category.component';
import { ProductsComponent } from './page/products/products.component';
import { DeltailComponent } from './page/deltail/deltail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FootterComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    ProductsComponent,
    DeltailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
