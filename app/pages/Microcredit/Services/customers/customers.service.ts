import { Injectable } from '@angular/core';
import { URLPathModule } from '../../Classes/urlpath/urlpath/urlpath.module';
 import { ajax } from 'rxjs/ajax';
import {  HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
 import {    Observable, throwError } from 'rxjs';
 import { HandleErrModule } from '../../Services/HandleErr/handle-err/handle-err.module';
import { catchError } from 'rxjs/internal/operators/catchError';
import { ICustomers } from '../../Classes/icustomers';
 @Injectable({
  providedIn: 'root'
})
export class CustomersService {
  _Customers!: ICustomers;
  _CustomersList: ICustomers[] = [];
  _handleError!: HandleErrModule; //HandleErrModule

  _Customersmodel :ICustomers;

  constructor(public _HttpClient: HttpClient, private _URLPathModule: URLPathModule) {
  }

  GETCustomersAsync(): Observable<ICustomers[]> {
    
    return this._HttpClient.get<ICustomers[]>(this._URLPathModule.CustomersURL)  .pipe(catchError(this.handleError));

  }

  GETCustomersByIdAsync(CustomerId: number): Observable<any> {
    return this._HttpClient.get<any>(`${this._URLPathModule.CustomersURL}/${CustomerId}`).pipe(catchError(this.handleError));

  }


  SearchCustomerStatusIdAsync(CustomerId: number): Observable<any> {
    return this._HttpClient.get<any>(`${this._URLPathModule.SearchCustomerStatusURL}/${CustomerId}`).pipe(catchError(this.handleError));

  }
  
  SearchLonaGuarantorStatusIdAsync(InputLonaGuarantor: number): Observable<any> {
    return this._HttpClient.get<any>(`${this._URLPathModule.SearchLonaGuarantorStatusesURL}/${InputLonaGuarantor}`).pipe(catchError(this.handleError));

  }
  
  SearchcanCustomerBeGuanantorStatuses(customerId: number): Observable<any> {
    return this._HttpClient.get<any>(`${this._URLPathModule.SearchcanCustomerBeGuanantorStatuses}/${customerId}`).pipe(catchError(this.handleError));

  }


  // CreateCustomersAsync( customers: ICustomers) :Observable<ICustomers[]>{
    // CreateCustomersAsync
    // (

      // customerId: number,
    //   customerName : string,
    //    customerNationalid: string,
    //   expirationdatenationalID: Date,
    //   firstPhone: string,
    //   secondPhone: string,
    //   businessName: string,
    //   workAddress: string,
    //   customerAddress: string,
    //   dateissuancenationalID: Date,
    //   notes : string,
    //   DateAdd: Date,
    //   dateEdit:Date,
    //   UsersID: number,
    //   maxLonaForCustomer?:number,
    //   maxNumberGuarantorLona?:number,
    //   canCustomerBeGuanantor?:boolean
    //       ){
      
    //   //Create a _Customers model Object to send to API
    // this._Customersmodel={
    //   customerName :customerName,
    //    customerNationalid:customerNationalid,
    //   expirationdatenationalID:expirationdatenationalID,
    //   firstPhone:firstPhone,
    //   secondPhone:secondPhone,
    //   businessName:businessName,
    //   workAddress:workAddress,
    //   customerAddress:customerAddress,
    //   dateissuancenationalID:dateissuancenationalID,
    //   notes:notes,
    //   dateAdd:DateAdd,
    //   DateEdit:dateEdit,
    //   UsersID:UsersID,
    //   maxLonaForCustomer:maxLonaForCustomer,
    //   maxNumberGuarantorLona:maxNumberGuarantorLona,
    //   canCustomerBeGuanantor:canCustomerBeGuanantor


    //     };
    CreateCustomersAsync(Customer: any): Observable<any> {
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      return this._HttpClient.post<any>(this._URLPathModule.CustomersURL , Customer, httpOptions)
      .pipe(catchError(this.handleError));
      ;
    }
  
// return this._HttpClient.post<any>(this._URLPathModule.CustomersURL,this._Customersmodel, {
//   headers: new HttpHeaders({
//       'Content-Type': 'application/json','No-Auth': 'True',
//   })
// })
  // }

  
  public handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
     } else {
        console.error('Server Side Error :', errorResponse);
     }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.' + console.error) ;
  
}

//TODO ADD CustomerId
UpdateCustomersAsync (CustomerId : number ,customers: any): Observable<any>{ 
return this._HttpClient.put<any>(`${this._URLPathModule.CustomersURL}/${CustomerId}`, customers, {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
})
  .pipe(catchError(this.handleError));
}


UpdateCustomer (CustomerId : number ,customers: any) : Observable<void>{
  return this._HttpClient.put<void> (`${this._URLPathModule.CustomersURL}/${CustomerId}`, customers, 
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  })
    .pipe(catchError(this.handleError));
  }

DeleteCustomersAsync(CustomerId : number) : Observable<void> {
return this._HttpClient.delete<void>(`${this._URLPathModule.CustomersURL}/${CustomerId}`)  .pipe(catchError(this.handleError));

}

}




