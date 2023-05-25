import { Component } from '@angular/core';
import { Product } from 'src/app/comon/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // show = true;
  // show(id) {};
  toggleDescription(product: any) {
    product.isDescriptionVisible = !product.isDescriptionVisible;
  }
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      description: 'Product 1 description',
      imgUrl:
        'https://heliosjewels.vn/cdn/shop/files/1-2_1_460x.jpg?v=1682916204',
        isDescriptionVisible: false,
        
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      description: 'Product 1 description',
      imgUrl:
        'https://heliosjewels.vn/cdn/shop/products/1_14_460x.jpg?v=1681911366',
        isDescriptionVisible: false,
    },
    {
      id: '3',
      name: 'Product 3',
      price: 300,
      description: 'Product 1 description',
      imgUrl:
        'https://heliosjewels.vn/cdn/shop/files/ELEGANTONYXRING_1_460x.jpg?v=1682916204',
        isDescriptionVisible: false,
    },
    // {
    //   id: '4',
    //   name: 'Product 4',
    //   price: 300,
    //   description: 'Product 1 description',
    //   imgUrl:
    //     'https://heliosjewels.vn/cdn/shop/products/9_Custom_1_460x.jpg?v=1679989335',
    //     isDescriptionVisible: false,
    // },
  ];
  }
 
