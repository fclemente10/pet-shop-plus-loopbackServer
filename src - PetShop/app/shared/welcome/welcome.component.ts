import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomeComponent {

  customerNameAfterRefreshing = '';
  customerName = '';

  @Input()
  number: number = null;

  public changeNameAfterRefreshing() {
    this.customerNameAfterRefreshing = this.customerName;
  }

  public isPepe() {
    return this.customerNameAfterRefreshing == 'pepe';
  }

  public isPair() {
    return this.number % 2 == 0;
  }

}
