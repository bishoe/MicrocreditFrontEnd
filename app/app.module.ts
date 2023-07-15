/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
 
  NbWindowModule,
} from '@nebular/theme';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA    } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Title } from '@angular/platform-browser';
 import { MatSlideToggleModule } from '@angular/material/slide-toggle';

 import {MatSelectModule} from '@angular/material/select';
 // import { DataTablesModule } from 'angular-datatables';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import { ToastrModule } from 'ngx-toastr';
// import {BranchesService} from './InternalShop/Services/Branches/branches.service'
import { HttpClientModule } from '@angular/common/http';
// import { URLPathModule } from './InternalShop/Classes/urlpath/urlpath/urlpath.module';
//import { PdfViewerModule } from 'ng2-pdf-viewer';
 
 import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import {CustomersService} from '../app/pages/Microcredit/Services/customers/customers.service'
import { ProductsComponent } from './pages/Microcredit/Components/products/products.component';
  import {CustomersComponent} from './pages/customers/customers.component'
  import {URLPathModule} from '../app/pages/Microcredit/Classes/urlpath/urlpath/urlpath.module'
  import {ListCustomersComponent} from './pages/list-customers/list-customers.component'


  import {InterestRateComponent} from './pages/interest-rate/interest-rate.component'

  import{ListInterestRateComponent} from './pages/list-interest-rate/list-interest-rate.component'
  import { UpdateInterestRateComponent } from './pages/update-interest-rate/update-interest-rate.component';
  import {AddnewLonaComponent} from './pages/addnew-lona/addnew-lona.component'
import { MainAddNewLonaComponent } from './pages/main-add-new-lona/main-add-new-lona.component';
import{TrackLonaComponent} from './pages/track-lona/track-lona.component'
import { NgSelectModule } from '@ng-select/ng-select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRippleModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';

import {UpdateLonaComponent} from './pages/update-lona/update-lona.component'
import { TestdropComponent } from './pages/testdrop/testdrop.component';
import {ListPaymentOfistallmentsComponent} from './pages/list-payment-ofistallments/list-payment-ofistallments.component'

import {AddNewPaymentOfistallmentsComponent} from './pages/add-new-payment-ofistallments/add-new-payment-ofistallments.component'
import {RemoveistallmentsComponent} from '../app/pages/Removeistallments/removeistallments/removeistallments.component';
import { ListRemoveistallmentsComponent } from './ListRemoveistallment/list-removeistallments/list-removeistallments.component'
 
import { ReportDuelmentsbetweenDateComponent } from './pages/Reports/ReportDuelmentsbetweenDate/report-duelmentsbetween-date/report-duelmentsbetween-date.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PaymentOfistallmentsbetweenDateReportComponent } from './pages/Reports/payment-ofistallmentsbetween-date-report/payment-ofistallmentsbetween-date-report.component';
import { AllInfoAboutcustomerReportComponent } from './pages/Reports/all-info-aboutcustomer-report/all-info-aboutcustomer-report.component';
import { CountCustomersReportComponent } from './pages/Reports/count-customers-report/count-customers-report.component';
import { AllIssuanceLoansReportComponent } from './pages/Reports/all-issuance-loans-report/all-issuance-loans-report.component';
import { IssuanceLoansbetweenDateReportComponent } from './pages/Reports/issuance-loansbetween-date-report/issuance-loansbetween-date-report.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import {MatRadioModule} from '@angular/material/radio';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/login/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { AllusermanagementComponent } from './pages/allusermanagement/allusermanagement.component';
import { UpdateCustomersComponent } from './pages/update-customers/update-customers.component';
 
 


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CustomersComponent,
    ListCustomersComponent,
    UpdateCustomersComponent,
    InterestRateComponent,
    ListInterestRateComponent,
    PaymentOfistallmentsbetweenDateReportComponent,
    UpdateInterestRateComponent,AddnewLonaComponent,
    MainAddNewLonaComponent,
    TrackLonaComponent,
    UpdateLonaComponent,
    TestdropComponent,
    ListPaymentOfistallmentsComponent,
    AddNewPaymentOfistallmentsComponent,
    RemoveistallmentsComponent,
     ListRemoveistallmentsComponent,
    ReportDuelmentsbetweenDateComponent, 
   AllInfoAboutcustomerReportComponent,
   CountCustomersReportComponent ,
   AllIssuanceLoansReportComponent,
   IssuanceLoansbetweenDateReportComponent,
   ListProductsComponent,
   UpdateProductComponent,
   LoginComponent,RegisterComponent,UserManagementComponent,AllusermanagementComponent
  ],
  imports: [
    BrowserModule,URLPathModule,NgxExtendedPdfViewerModule,MatRadioModule,    
    ToastrModule.forRoot(), // ToastrModule added
    
    NgSelectModule,
    FontAwesomeModule,
    MatRippleModule,
    MatDatepickerModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),   
 
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
     NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule, 
    MatSlideToggleModule,
    MatOptionModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    NgxPaginationModule,
     Ng2OrderModule,
  
     
  ],
  
  schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
