import {Injectable} from '@angular/core';

@Injectable()
export class CustomerService {

  customer = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    city: "",
    postalCode: "",
    rgpdChecked: false
  };

  public setCustomer(customer) {
    this.customer = customer;
  }

  public getCustomer() {
    return this.customer;
  }

}
