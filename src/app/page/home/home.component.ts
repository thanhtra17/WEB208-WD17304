import { Component } from '@angular/core';
import { Product } from 'src/app/comon/product';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: IProduct[] = [];
constructor (private productService: ProductService ){
  this.productService.getProducts().subscribe(
    (data) =>{
      this.products = data;
    },
    (error) => console.log(error.massage)
  );
}
delete(id: string) {
  this.productService.deleteProduct(id).subscribe(() => {
    this.products = this.products.filter(product => product.id !== id)
  })
}
}
 
