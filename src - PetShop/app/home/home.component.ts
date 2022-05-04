import {Component, Renderer2, ViewEncapsulation} from '@angular/core';
import {ShoppingCartService} from '../shared/shoppingcart/shoppingcart.service';
import {ProductControllerService} from '../shared/sdk';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  public products;

  public constructor(protected shoppingCartService: ShoppingCartService,
                     protected productControllerService: ProductControllerService) {
    
    this.productControllerService.productControllerFind({}).subscribe(products => {
      this.products = products;
    })
  }

  public addProductToCart(product) {
    this.shoppingCartService.addToCart(product, 1);
  }

}
