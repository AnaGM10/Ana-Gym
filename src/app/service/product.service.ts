import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(1, 'T-Shirt', 'Your perfect gym T-Shirt ', 120, 1, [
      'assets/img/shirt1.jpeg',
      'assets/img/shirt2.jpeg',
      'assets/img/shirt3.jpeg',
    ]),
    new Product(
      2,
      'Gym Bottles',
      'Hydrate your self for better workouts',
      99,
      1,
      ['assets/img/bottle1.jpeg', 'assets/img/bottle2.jpeg']
    ),
    new Product(3, 'Cool Towel', 'Stay cool with new CoolTowel', 45, 1, [
      'assets/img/towel1.jpeg',
      'assets/img/towel2.jpeg',
    ]),
    // new Product(
    //   1,
    //   "Gym Bag",
    //   "Be trendy with our new gym Bags",
    //   120,
    //   1,
    //   ['assets/img/bag1.jpeg','assets/img/bag2.jpeg','assets/img/bag3.jpeg']
    //   ),
  ];
  constructor() {}

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    return this.products.find((product) => product.id === id);
  }
}
