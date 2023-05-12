import { Component } from '@angular/core';
import { Product } from 'src/app/comon/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  show = true;
  // show(id) {};
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      price: 100,
      description: 'Product 1 description',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
    {
      id: '2',
      name: 'Product 2',
      price: 200,
      description: 'Product 1 description',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
    {
      id: '3',
      name: 'Product 3',
      price: 300,
      description: 'Product 1 description',
      imgUrl:
        'https://m.media-amazon.com/images/M/MV5BYzQ0ZWIxZjAtYWI3Yy00MGM0LWFjOGYtNzcyYThiOTA3ODI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
    },
  ];
  }
 
