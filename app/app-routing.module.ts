import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { ProductsComponent } from './pages/Microcredit/Components/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ListCustomersComponent } from './pages/list-customers/list-customers.component';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component';
import { AddnewLonaComponent } from './pages/addnew-lona/addnew-lona.component';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      // {
      //   path: 'Customers',
      //   component: CustomersComponent,
      // },
      // {
      //   path: 'ListCustomers',
      //   component: ListCustomersComponent,
      // },
       
      // {
      //   path: 'UpdateCustomers',
      //   component: UpdateCustomersComponent,
      // },
       {
        path: 'UpdateCustomers/:customerId',
        component:UpdateCustomersComponent
       },

      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
      {
        
        path: 'Products',
        component: ProductsComponent,
      }
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
