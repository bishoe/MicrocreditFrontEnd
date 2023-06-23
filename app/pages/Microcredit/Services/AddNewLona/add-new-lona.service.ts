import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
 import {URLPathModule} from '../../Classes/urlpath/urlpath/urlpath.module'
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IAddLona } from '../../Classes/iadd-lona';
import { IAddLonaInput } from '../../Classes/iadd-lona-input';
import { IAddLonaDetails, IIssuanceLona } from '../../Classes/iadd-lona-details';

@Injectable({
  providedIn: 'root'
})
export class AddNewLonaService {
  constructor(private _HttpClient: HttpClient, private _URLPathModule: URLPathModule) { }
  
  _IAddLonaModel:IAddLona;
  _IAddLonaDetails:IAddLonaDetails;
  _IIssuanceLona:IIssuanceLona;

CreateNewLona(
  LonaGuarantorId:number,
  NoColumn:number
){
  this._IAddLonaDetails={
    LonaGuarantorId :LonaGuarantorId,
     NoColumn:NoColumn,
  };
  return this._HttpClient.post<any>
  (this._URLPathModule.AddNewLoanURL,  this._IAddLonaDetails , {
    headers: new HttpHeaders({
        'Content-Type': 'application/json' ,'No-Auth': 'True',
    })        
  })
    .pipe(catchError(this.handleError));
}

 CreatNewLonaMaster( 

    ProdcutId:number,
    CustomerId:number,
    interestRateid:number,
    monthNumber:number,
    //StartDateLona:Date,
    //EndDateLona:Date,
    dateAdd:Date,
     AmountBeforeAddInterest:number,
    // AmountAfterAddInterest :number,
    StatusLona:number,
    // IstalmentsNo:number,
    InputLonaGuarantor:number,

    iAddLonaInput:IAddLonaInput[],
    NoColumn:number

  ){
this._IAddLonaModel={
ProdcutId:ProdcutId,
  CustomerId:CustomerId,
  interestRateid:interestRateid,
monthNumber:monthNumber,
//StartDateLona:StartDateLona,
//EndDateLona:EndDateLona,
dateAdd:dateAdd,
 AmountBeforeAddInterest:AmountBeforeAddInterest,
// AmountAfterAddInterest:AmountAfterAddInterest,
StatusLona:StatusLona,
// IstalmentsNo:IstalmentsNo,
 iAddLonaInput:iAddLonaInput,
NoColumn:NoColumn
};
return this._HttpClient.post<any>
(this._URLPathModule.AddNewLoanmasterURL,  this._IAddLonaModel , {
  headers: new HttpHeaders({

      'Content-Type': 'application/json' ,'No-Auth': 'True',
  })        

})
  .pipe(catchError(this.handleError));
 
  }

  // ProdcutId:number,
  // CustomerId:number,
  // InterestRateid:number,
  // MonthNumber:number,
  // StartDateLona:Date,
  // EndDateLona:Date,
  // DateAdd:Date,
  // AmountBeforeAddInterest:number,
  // AmountAfterAddInterest :number,
  // StatusLona:boolean,
  // IstalmentsNo:number,
  // InputLonaGuarantor:number,
  // iAddLonaInput:IAddLonaInput[],
  // NoColumn:number
 
  // this._IAddLonaModel={
  //   ProdcutId:ProdcutId,
  //     CustomerId:CustomerId,
  //   InterestRateid:InterestRateid,
  //   MonthNumber:MonthNumber,
  //   StartDateLona:StartDateLona,
  //   EndDateLona:EndDateLona,
  //   DateAdd:DateAdd,
  //   AmountBeforeAddInterest:AmountBeforeAddInterest,
  //   AmountAfterAddInterest:AmountAfterAddInterest,
  //   StatusLona:StatusLona,
  //   IstalmentsNo:IstalmentsNo,
  //   InputLonaGuarantor:InputLonaGuarantor,
  //    iAddLonaInput:iAddLonaInput,
  //   NoColumn:NoColumn
 
  UpdateMasterLonaAsync(LonaId:number ,LonaObject :any): Observable<any>
{
return this._HttpClient.put<any>(`${this._URLPathModule.UpdateLonaMasterAsyncURL}/${LonaId}`,LonaObject,{
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })

})  .pipe(catchError(this.handleError));

}
// UpdateLonaAsync(LonaId:number ,LonaObject :any): Observable<any>
// {
// return this._HttpClient.put<any>(`${this._URLPathModule.UpdateLonaAsyncURL}/${LonaId}`,LonaObject,{
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })

// })  .pipe(catchError(this.handleError));

// }
//   LonaGuarantorId:number,
//   NoColumn:number,
//   LonaId:number
// ){
//   this._IAddLonaDetails={
//     LonaGuarantorId :LonaGuarantorId,
//     NoColumn:NoColumn,
//     LonaId:LonaId
//   };



// UpdateLonaAsync(updteform :IAddLonaDetails):Observable<IAddLonaDetails>{
//   return this._HttpClient.put<IAddLonaDetails>
//   (`${this._URLPathModule.UpdateLonaAsyncURL}`,updteform, {
    
//     headers: new HttpHeaders({
  
//         'Content-Type': 'application/json' ,'No-Auth': 'True',
//     })        
  
//   })
//     .pipe(catchError(this.handleError));
   
// }
UpdateLona(
  LonaGuarantorId:number, 
   LonaId:number,
   lonaDetailsId:number,
  NoColumn:number
){
  this._IAddLonaDetails={
    LonaGuarantorId :LonaGuarantorId,
    LonaId:LonaId,
    lonaDetailsId:lonaDetailsId,
    NoColumn:NoColumn,
  };

  return this._HttpClient.put<any>
  (this._URLPathModule.UpdateLonaAsyncURL,  this._IAddLonaDetails , {
    
    headers: new HttpHeaders({
  
        'Content-Type': 'application/json' ,'No-Auth': 'True',
    })        
  
  })
    .pipe(catchError(this.handleError));
   
    
}
DeleteLonaMaster(LonaId:number):Observable<number>{
  let httpheaders=new HttpHeaders()
  .set('Content-type','application/Json');
  let options={
    headers:httpheaders
  };
 
  return this._HttpClient.delete<number>
  (this._URLPathModule.DeleteLonaMasterURL +  LonaId ).pipe(catchError(this.handleError));
    
   }  



DeleteLonaDetails(   lonaDetailsId:number):Observable<number>{
  let httpheaders=new HttpHeaders()
  .set('Content-type','application/Json');
  let options={
    headers:httpheaders
  };
 
  return this._HttpClient.delete<number>
  (this._URLPathModule.DeleteLonaDetailsURL +  lonaDetailsId ).pipe(catchError(this.handleError));
    
   }  
  

IssuanceLonaAsync(
  LonaId:number,
  StatusLona:number,
    AmountAfterAddInterest:number,
    StartDateLona:Date,
    EndDateLona:Date 

 ){
  this._IIssuanceLona={
    LonaId:LonaId,
    StatusLona:StatusLona,
     AmountAfterAddInterest:AmountAfterAddInterest,
     StartDateLona:StartDateLona,
     EndDateLona:EndDateLona,
  };

  return this._HttpClient.put<any>
  (this._URLPathModule.UIssuanceLonaAsyncURL,  this._IIssuanceLona , {
    
    headers: new HttpHeaders({
  
        'Content-Type': 'application/json' ,'No-Auth': 'True',
    })        
  
  })
    .pipe(catchError(this.handleError));
   
    
}
      GetTrackLonaAsync(): Observable<IAddLona[]> {
    return this._HttpClient.get<IAddLona[]>(this._URLPathModule.TrackLonaURL)  .pipe(catchError(this.handleError));

  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
     } else {
        console.error('Server Side Error :', errorResponse);
     }
    return throwError('There is a problem with the service. We are notified & working on it. Please try again later.' + console.error) ;
  }
}
