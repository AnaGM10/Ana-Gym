import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

// declare const ready: any;
// declare const addToCart: any;
// declare const purchaseClicked: any;
// declare const removeCartItem: any;
// declare const quantityChanged: any;
// declare const addToCartClicked: any;
// declare const addItemToCart: any;
// declare const updateCartTotal: any;

@Component({
  selector: 'app-shop-gear',
  templateUrl: './shop-gear.component.html',
  styleUrls: ['./shop-gear.component.scss']
})
export class ShopGearComponent implements OnInit {
itemInCart: number;
products: Product[] = [];

  constructor(
    private cartServices: CartService,
    private productServices: ProductService
  ) {}

  ngOnInit(): void {
    // new ready();
    // new addToCart();
    // new purchaseClicked();
    // new removeCartItem();
    // new quantityChanged();
    // new addToCartClicked();
    // new addItemToCart() ;
    // new updateCartTotal();

    this.cartServices.cartItems
      .subscribe( d=> {
        this.itemInCart  = d.length;
      });
  

  this.products= this.productServices.getProducts();
  }

}
