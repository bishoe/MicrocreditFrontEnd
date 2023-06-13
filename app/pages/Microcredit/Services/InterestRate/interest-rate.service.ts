import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IInterestRate } from '../../Classes/iinterest-rate';
import { URLPathModule } from '../../Classes/urlpath/urlpath/urlpath.module';
import { HandleErrModule } from '../HandleErr/handle-err/handle-err.module';

import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class InterestRateService {

  _InterestRate!: IInterestRate;
 _IInterestRate: IInterestRate;
  _InterestRateList: IInterestRate[] = [];
  _handleError!: HandleErrModule; //HandleErrModule

  _InterestRatemodel :IInterestRate;

  constructor(public _HttpClient: HttpClient, private _URLPathModule: URLPathModule,private toastr: ToastrService) {
  }
  GETInterestRateAsync(): Observable<any[]> {
    return this._HttpClient.get<any[]>(this._URLPathModule.InterestRate)  .pipe(catchError(this.handleError));

  }

 
  CreateInterestRateAsync(

    interestRateName : string,
    interestRateValue: number,
     dateAdd: Date,
         )
    {
    // Create a _InterestRatemodel model Object to send to API
  this._InterestRatemodel={
    interestRateName:interestRateName,
    interestRateValue:interestRateValue,
    dateAdd:dateAdd

      };

return this._HttpClient.post<any>(this._URLPathModule.InterestRate,this._InterestRatemodel, {
headers: new HttpHeaders({
    'Content-Type': 'application/json','No-Auth': 'True',
})
})
.pipe(catchError(this.handleError));

}
  public handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
     } else {
        console.error('Server Side Error :', errorResponse);
     }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.' + console.error) ;
  
}

//TODO  
UpdateInterestRateAsync (InterestRateId : number ,InterestRate: any): Observable<any>{ 
return this._HttpClient.put<any>(`${this._URLPathModule.InterestRate}/${InterestRateId}`, InterestRate, {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
})
  .pipe(catchError(this.handleError));
}

GETInterestRateByIdAsync(interestRateId: number): Observable<any> {
  return this._HttpClient.get<any>(`${this._URLPathModule.InterestRate}/${interestRateId}`).pipe(catchError(this.handleError));

}


DeleteCustomersAsync(CustomerId : number) : Observable<void> {
return this._HttpClient.delete<void>(`${this._URLPathModule.CustomersURL}/${CustomerId}`)  .pipe(catchError(this.handleError));

}

}




