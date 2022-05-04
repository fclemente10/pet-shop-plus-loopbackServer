import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {ProductControllerService} from './shared/sdk';
import {AdminComponent} from './admin/admin.component';
import {ProductcreationComponent} from './admin/productcreation/productcreation.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'productos/:productId',
    component: ProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin/new-product',
    component: ProductcreationComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routedComponents = [
  HomeComponent,
  ProductComponent,
  CheckoutComponent,
  ];
