import {Component, OnDestroy, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Product} from '../shared/model/product';
import {ProductControllerService} from '../shared/sdk';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnDestroy {

  public product: Product;

  protected subscriptions = [];

  public constructor(protected route: ActivatedRoute,
                      protected productControllerService: ProductControllerService ) {

    this.route.params.subscribe(param => {

      let productId = param['productId'];

      this.productControllerService.productControllerFindById(productId, {}).subscribe(product => {
        this.product = product;
      })
      
      console.log('parametro productId: ' + productId);  
   
    });

  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }




}
