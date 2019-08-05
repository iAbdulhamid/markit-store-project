import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  selectedItems = [];
  total = 0;

  constructor(private cartService:CartService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])

    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

  decreaseProductCount(itm) {
    if (itm.count > 1) {
      itm.count--;
      this.recalculateTotalAmount();
    }
  }

  incrementProductCount(itm) {
    itm.count++;
    this.recalculateTotalAmount();
  } 

  recalculateTotalAmount() {
    // let newTotalAmount = 0;
    // this.cartItems.forEach( cartItem => {
    //     newTotalAmount += (cartItem.productPrice * cartItem.count)
    // });
    // this.totalAmount = newTotalAmount;
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
 
}


}
