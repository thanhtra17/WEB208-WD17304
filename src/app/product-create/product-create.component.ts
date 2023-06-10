import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  productForm = this.formBuilder.group({
    name: [``, [Validators.required,Validators.minLength(4)]],
    price: [0]
  });
  
  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService
  ){}
  
  onHandleSubmit(){
    const product: IProduct = {
      id: ``,
      name: this.productForm.value.name || ``,
      price: this.productForm.value.price || 0,
      desc: this.productForm.value.desc || ``,
      imgUrl: ''
    };
    this.productService.addProduct(product).subscribe((product) =>{
      alert(`them sp thanh cong`)
    })
  }
}
