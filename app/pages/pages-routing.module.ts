import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
 import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

// import { CustomerytComponent } from './customeryt/customeryt.component';
import { CustomersComponent } from './customers/customers.component';

import { ListCustomersComponent } from './list-customers/list-customers.component';
import { UpdateCustomersComponent } from './update-customers/update-customers.component';
import { InterestRateComponent } from './interest-rate/interest-rate.component';
import { UpdateInterestRateComponent } from './update-interest-rate/update-interest-rate.component';
import { ListInterestRateComponent } from './list-interest-rate/list-interest-rate.component';
import { AddnewLonaComponent } from './addnew-lona/addnew-lona.component';
import { MainAddNewLonaComponent } from './main-add-new-lona/main-add-new-lona.component';
import { TrackLonaComponent } from './track-lona/track-lona.component';
import { UpdateLonaComponent } from './update-lona/update-lona.component';
import { TestdropComponent } from './testdrop/testdrop.component';
import { ListPaymentOfistallmentsComponent } from './list-payment-ofistallments/list-payment-ofistallments.component';
import { AddNewPaymentOfistallmentsComponent } from './add-new-payment-ofistallments/add-new-payment-ofistallments.component';
import { RemoveistallmentsComponent } from './Removeistallments/removeistallments/removeistallments.component';
import { ListRemoveistallmentsComponent } from '../ListRemoveistallment/list-removeistallments/list-removeistallments.component';
import { ReportDuelmentsbetweenDateComponent } from './Reports/ReportDuelmentsbetweenDate/report-duelmentsbetween-date/report-duelmentsbetween-date.component';
import { PaymentOfistallmentsbetweenDateReportComponent } from './Reports/payment-ofistallmentsbetween-date-report/payment-ofistallmentsbetween-date-report.component';
import { AllInfoAboutcustomerReportComponent } from './Reports/all-info-aboutcustomer-report/all-info-aboutcustomer-report.component';
import { CountCustomersReportComponent } from './Reports/count-customers-report/count-customers-report.component';
import { IssuanceLoansbetweenDateReportComponent } from './Reports/issuance-loansbetween-date-report/issuance-loansbetween-date-report.component';
import { ProductsComponent } from './Microcredit/Components/products/products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { LoginComponent } from './login/login.component';
  import { RegisterComponent } from './login/register/register.component';
 import { AuthGuardService } from './Auth/guards/auth-guard.service';
import { UserManagementComponent } from './user-management/user-management.component';
import { AllusermanagementComponent } from './allusermanagement/allusermanagement.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
   
const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'UserManagement',
       component: UserManagementComponent,canActivate:[AuthGuardService] 
     // component: UserManagementComponent

    },
    {
      path: 'AllUserManagement',
      component: AllusermanagementComponent,canActivate:[AuthGuardService] 
    },
    
    {
      path: 'adminlayout',
      component: AdminLayoutComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'customers',
      component:CustomersComponent
     },
     {
      path: 'ListCustomers',
      component:ListCustomersComponent
     },
     {
      path:'InterestRate',
      component:InterestRateComponent
     },
     
     {
      path: 'UpdateCustomers/:customerId',
      component:UpdateCustomersComponent
     },
     {path:'ListInterestRate',
    component:ListInterestRateComponent
    },
 {
  path:'UpdateInterestRate/:interestRateId',
  component:UpdateInterestRateComponent
 },
 {
  path:'addnewlona/:customerId',
  component:AddnewLonaComponent

   } ,
   {
path:'ListPaymentOfistallments',
component:ListPaymentOfistallmentsComponent
   },
   {
    path:'testdropdown',
    component:TestdropComponent
   },
   {
path:'mainaddnewlona',
component:MainAddNewLonaComponent

},
{
  path:'TrackLona',
  component:TrackLonaComponent
},
{
path:'UpdateLona/:lonaId',
component:UpdateLonaComponent
},
{
path:'AddNewPayment/:paymentId',
component:AddNewPaymentOfistallmentsComponent
},
{path:'ListPaymentOfistallments',
component:ListPaymentOfistallmentsComponent
},
{
  path:'ListRemoveistallment',
  component:ListRemoveistallmentsComponent
},
{
  path:'Removeistallments/:paymentId',
  component:RemoveistallmentsComponent
  

},
{
  path:'ReportDuelments',
  component:ReportDuelmentsbetweenDateComponent
},
{
path:'PaymentOfistallmentsbetweenDateReport',
component:PaymentOfistallmentsbetweenDateReportComponent
},

{
path:'AllInfoAboutcustomerReport',
component:AllInfoAboutcustomerReportComponent
}
, 
{
path:'CountCustomersReport',
component:CountCustomersReportComponent

},

{
path:'IssuanceLoansbetweenDateReport',
component:IssuanceLoansbetweenDateReportComponent

},

{
  path:'Products',
  component:ProductsComponent
},
{
  path:'ListProducts',
  component:ListProductsComponent
},

{

 
path:'UpdateProduct/:prodouctsID',
component:UpdateProductComponent
}
 
,

    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
