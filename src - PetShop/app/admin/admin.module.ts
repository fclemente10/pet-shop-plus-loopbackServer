import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {adminRoutedComponents, AdminRoutingModule} from './admin-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ShoppingCartService} from '../shared/shoppingcart/shoppingcart.service';
import {CustomerService} from '../shared/customerservice/customer.service';
import {sdkConfigurationProvider} from '../shared/sdkconfiguration.provider';
import {environment} from '../../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {ProductControllerService} from '../shared/sdk';
import {AppModule} from '../app.module';



@NgModule({
  declarations: [
    adminRoutedComponents,

  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,

  ],
  providers: [
    ShoppingCartService,
    CustomerService,
    sdkConfigurationProvider,
    { provide: 'environment', useValue: environment },
  ],


})
export class AdminModule {
}
