import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routedComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {WelcomeComponent} from './shared/welcome/welcome.component';
import {ProductBoxComponent} from './shared/productbox/productbox.component';
import {ShoppingCartService} from './shared/shoppingcart/shoppingcart.service';
import {ShoppingCartComponent} from './shared/shoppingcart/shoppingcart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CustomerService} from './shared/customerservice/customer.service';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import {environment} from './../environments/environment';
import {sdkConfigurationProvider} from './shared/sdkconfiguration.provider';


@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent,
        ProductBoxComponent,
        ShoppingCartComponent,
        routedComponents,
        CheckoutComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        AdminModule
    ],
    providers: [
        ShoppingCartService,
        CustomerService,
        sdkConfigurationProvider,
        {provide: 'environment', useValue: environment},
    ],
    exports: [
        ProductBoxComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
