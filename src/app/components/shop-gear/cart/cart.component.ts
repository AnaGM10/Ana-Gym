import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
items: Product[] = [];
total: number;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems
        .subscribe ( data=> {
          this.items =data;
          if(this.items) {
            this.getTotal(this.items);
          }
        })
  }

  onDelete (i: number) {
    this.items.splice(i, 1);
    this.cartService.setCartData(this.items);
    this.getTotal(this.items);
  }


  validateInput (event: any , i: number) {
    const qty = +event.target.value;
    if (qty < 1) {
      event.target.value = this.items[i].qty;
      return;
    }
    this.qtyUpdate (qty, i );
  }

  private qtyUpdate (qty: number, i: number) {
    this.items[i].qty = qty;
    this.cartService.setCartData(this.items);
    this.getTotal(this.items);
  }

  getTotal(data: any) {
    let subs = 0 ;
    for (const item of data) {
      subs +=item.price * item.qty;
      this.total = subs;
    }
  }

}
