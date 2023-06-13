import { Injectable } from '@angular/core';
 
 import { ajax } from 'rxjs/ajax';
import {  HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
 import {    Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/internal/operators/catchError';
import { HandleErrModule } from './HandleErr/handle-err/handle-err.module';
import { URLPathModule } from '../Classes/urlpath/urlpath/urlpath.module';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  _handleError!: HandleErrModule; //HandleErrModule

  constructor(public _HttpClient: HttpClient, private _URLPathModule: URLPathModule) {
  }
  GETAllAsync( URLPathModule): Observable<[]> {
    return this._HttpClient.get<[]>(URLPathModule)  .pipe(catchError(this.handleError));

  }
  GETByIdAsync( Id: number,URLPathModule): Observable<any > {
    return this._HttpClient.get<any>(`${URLPathModule}/${Id}`).pipe(catchError(this.handleError));
 
  }


  GETwithDatesAsync( FirstParam: Date,SecodParam:Date,URLPathModule): Observable<any > {
    
    return this._HttpClient.get<any>(`${URLPathModule}/${FirstParam}/${SecodParam}`).pipe(catchError(this.handleError));
 
  }

  UpdateAsync(Id:number ,Object :any,URLPathModule): Observable<any>
  {
  return this._HttpClient.put<any>(`${URLPathModule}/${Id}`,Object,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  
  })  .pipe(catchError(this.handleError));
  
  }
  UpdateWithIdAsync(Id:number ,URLPathModule): Observable<any>
  {
  return this._HttpClient.put<any>(`${URLPathModule}/${Id}`,{
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  
  })  .pipe(catchError(this.handleError));
  
  }
  // _GETByIdAsync( Id: number,URLPathModule): Observable<ICustomers[]> {
  //   return this._HttpClient.get<ICustomers[]>(`${URLPathModule}/${Id}`).pipe(catchError(this.handleError));
 
  // }
  public handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
     } else {
        console.error('Server Side Error :', errorResponse);
     }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.' + console.error) ;
  
}



}
