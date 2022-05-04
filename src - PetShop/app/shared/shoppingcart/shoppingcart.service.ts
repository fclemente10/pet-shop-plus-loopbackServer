import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class ShoppingCartService {

  protected cart = [];

  public updateCartSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  public addToCart(product, quantity) {
    let exists = false;
    //check that product does not exists, otherwise increment the quantity
    this.cart.forEach(item => {
      if(item.product.name == product.name) {
        item.quantity = item.quantity + quantity;
        exists = true;
      }
    });
    if(!exists) {
      this.cart.push({
        "product": product,
        "quantity": quantity
      });
    }
    this.updateCartSubject.next(this.count());
    console.log(this.cart);
  }

  public count() {
    let result = 0;
    this.cart.forEach(item => {
      result += item.quantity;
    });
    return result;
  }

}
