import {Component, ViewEncapsulation} from '@angular/core';
import {ShoppingCartService} from '../shared/shoppingcart/shoppingcart.service';
import {ProductControllerService} from '../shared/sdk';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent {
  public products;

  public del;

  API_URL: string = "http://localhost:3000/";

  public constructor(protected shoppingCartService: ShoppingCartService,
                     protected productControllerService: ProductControllerService) {

    this.productControllerService.productControllerFind({}).subscribe(products => {
      this.products = products;
    })
  }

  public addProductToCart(product) {
    this.shoppingCartService.addToCart(product, 1);
  }


  public onSubmit() {
    this.load();
  }

  deleteClient( apagar: string ) {
    this.productControllerService.productControllerDeleteById(apagar).subscribe(products => {
      this.products = products;
      this.load();
    })
  }

  load() {
    location.reload()
  }
}

