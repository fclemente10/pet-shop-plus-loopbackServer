import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from '../shared/customerservice/customer.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  customer = {};

  @ViewChild("f", {static: false}) protected form: NgForm;

  constructor(protected customerService: CustomerService) {

    this.customer = customerService.getCustomer();

  }

  ngOnDestroy() {
    this.customerService.setCustomer(this.form.value);
  }

  ngOnInit() {
  }

  public onSubmit(form) {
    console.log(form);

    if(form.valid) {
      this.customerService.setCustomer(form.value);
    }

  }

}
