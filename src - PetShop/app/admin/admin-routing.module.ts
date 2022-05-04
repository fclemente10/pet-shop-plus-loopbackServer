import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ProductcreationComponent} from './productcreation/productcreation.component';
import {NgModule} from '@angular/core';
import {sdkConfigurationProvider} from '../shared/sdkconfiguration.provider';


export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'new-product', component: ProductcreationComponent },

      {
        path: 'products/:id :name :description :price ',
        component: ProductcreationComponent,
        pathMatch: 'full'
      },
   ]

  }
];


@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)

  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

export const adminRoutedComponents = [
  ProductcreationComponent,
  AdminComponent
];
