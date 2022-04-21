import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  displayedImg = 0;
  itemInCart: number;

  constructor( 
    private  productService: ProductService,
    private router:ActivatedRoute,
    private cartServices: CartService
  ) { }

  ngOnInit(): void {
    const id = +this.router.snapshot.params['id']
    this.product = this.productService.getProduct(id);

    this.cartServices.cartItems
      .subscribe( d=> {
        this.itemInCart  = d.length;
      });
    
  }

  addToCart(product: Product) {
    this.cartServices.addItem(product);
    
  }

}
