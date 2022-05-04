import {Component, Input, Output, ViewEncapsulation} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Component({
  selector: 'productbox',
  templateUrl: './productbox.component.html',
  styleUrls: ['./productbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductBoxComponent {

  @Input()
  public product;

  @Output("purchase")
  public purchaseSubject: ReplaySubject<any> = new ReplaySubject();



  public onPurchase() {
    this.purchaseSubject.next(this.product);
  }




}
