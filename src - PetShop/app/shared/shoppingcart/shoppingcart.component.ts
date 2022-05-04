import {Component, Input, OnDestroy, ViewEncapsulation} from '@angular/core';
import {ShoppingCartService} from './shoppingcart.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingCartComponent implements OnDestroy {

  public totalItems = 0;

  protected subscription: Subscription;

  public constructor(protected shoppingCartService: ShoppingCartService,
                     protected router: Router ) {

    this.subscription = this.shoppingCartService.updateCartSubject.subscribe(cartItemsCount => {
      this.totalItems = cartItemsCount;
      if(cartItemsCount > 0) {
        alert('Añadido al carrito');
      }
    });

  }

  public showShoppingCartDetails() {
    alert("Shopping cart total items: " + this.totalItems);
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public goToCheckout() {
    this.router.navigate(['/checkout']);
  }


}
