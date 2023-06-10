import { Component } from '@angular/core';
import { IProduct } from '../interface/product';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  product!: IProduct;
  // Khởi tạo biến product có interface: IProduct
  // Dấu "!" hiển thị rằng biến này sẽ được gán giá trị sau, lần đầu khởi tạo sẽ không có giá trị ban đầu.
  productForm = this.formBuilder.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    price: [0],
  });
  // productForm sẽ tạo ra giá trị default và validation cho Form như trên

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe((params) => {
      const id = String(params.get("id"));
      // lấy ra id của sản phẩm
      this.productService.getProductById(id).subscribe(
        // Tìm ra sản phẩm theo id và patchValue vào form
        (data) => {
          this.product = data;

          this.productForm.patchValue({
            name: data.name,
            price: data.price,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      // Khi nhấn submit, khởi tạo sẵn giá trị cho product lấy từ form người dùng nhập hoặc để default value
      const product: IProduct = {
        id: "",
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        desc: '',
        imgUrl: ''
      };

      this.productService.updateProduct(product).subscribe((product) => {
        alert(`Cập nhật sản phẩm thành công: ${product.name}`);
        // console.log("product", product);
      });
    }
  }
}
