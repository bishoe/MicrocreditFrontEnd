import { Injectable } from '@angular/core';
 import { catchError } from 'rxjs/internal/operators/catchError';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IPaymentOfistallments, IPaymentOfistallmentsDetails } from '../Classes/ipayment-ofistallments';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { URLPathModule } from '../Classes/urlpath/urlpath/urlpath.module';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class PaymentOfistallmentsService {
_IPaymentOfistallments : IPaymentOfistallments;
_IPaymentOfistallmentsDetails :IPaymentOfistallmentsDetails;

  constructor(private _HttpClient: HttpClient, private _URLPathModule: URLPathModule) { }

  CreateNewPaymentOfistallments(
    // PaymentId? :number,
    CustomerId?  :number,
    // IstalmentsAmount :number,
    // AmountPaid :number,
    // AmountRemaining :number,
    LonaAmount? :number,
   DateAdd? :Date,
   IsDelete? :boolean,
   UserId? :string,
   LonaId?:number,
   ProdouctsID? :number,
   monthNumber?:number,
   DiscountPercentage?:number, 
   AmountBeforeDiscount? :number,
  AmountAfterDiscount ? :number,
  ExpeditedPaymentDate ? :Date,
  StatusLona?:number
  //  NoIstalments:number
  ){
    this._IPaymentOfistallments={
      CustomerId:CustomerId,
       LonaAmount:LonaAmount,
      DateAdd:DateAdd,
      IsDelete:IsDelete,
      UserId:UserId,
      LonaId:LonaId,
      ProdouctsID:ProdouctsID,
      monthNumber:monthNumber,
      DiscountPercentage :DiscountPercentage, 
      AmountBeforeDiscount  :AmountBeforeDiscount,
     AmountAfterDiscount   :AmountAfterDiscount,
      StatusLona  :StatusLona ,
     ExpeditedPaymentDate   :ExpeditedPaymentDate,
      // NoIstalments:NoIstalments
    };
    return this._HttpClient.post<any>(this._URLPathModule.AddNewPaymentOfistallmentsURL,this._IPaymentOfistallments,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
    
    })
     }).pipe(map(result =>{
      return result;
    }));
  }
  DeleteLonaPaymentOfistallments(
    PaymentId?:number,
     CustomerId?  :number,
     LonaAmount? :number,
   DateAdd? :Date,
   IsDelete? :boolean,
   UserId? :string,
   LonaId?:number,
   ProdouctsID? :number,
   monthNumber?:number,
  //  DiscountPercentage?:number, 
  //  AmountBeforeDiscount? :number,
  // AmountAfterDiscount ? :number,
  //  StatusLona? :number ,
  // ExpeditedPaymentDate ? :Date,
  //  NoIstalments:number
  ){
    this._IPaymentOfistallments={
      PaymentId:PaymentId,
      CustomerId:CustomerId,
       LonaAmount:LonaAmount,
      DateAdd:DateAdd,
      IsDelete:IsDelete,
      UserId:UserId,
      LonaId:LonaId,
      ProdouctsID:ProdouctsID,
      monthNumber:monthNumber,
    
      // NoIstalments:NoIstalments
    };
    return this._HttpClient.put<any>(this._URLPathModule.DeleteLonaPaymentOfistallmentsURL,this._IPaymentOfistallments,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
    
    })
     }).pipe(map(result =>{
      return result;
    }));
  } 


   CreateNewPaymentOfistallmentsDetalis(
    // PaymentId :number,
    IstalmentsAmount :number,
    AmountPaid :number,
    AmountRemaining :number,
   monthNumber:number,
   NoIstalments:number,
   StatusIstalments:number,
   DueDate:Date
  ){
    this._IPaymentOfistallmentsDetails={
      // PaymentId:PaymentId,
      monthNumber:monthNumber,
      IstalmentsAmount:IstalmentsAmount,
      AmountPaid:AmountPaid,
      AmountRemaining:AmountRemaining,
      NoIstalments:NoIstalments,
      StatusIstalments:StatusIstalments,
      DueDate:DueDate

    };
    return this._HttpClient.post<any>(this._URLPathModule.AddNPaymentOfistallmentsDeatilsURL,this._IPaymentOfistallmentsDetails,{
      headers: new HttpHeaders({ 
        
        'Content-Type': 'application/json' ,'No-Auth': 'True'
    }) }).pipe(map(result =>{
      // console.log(result)
      return result;
    }));
  }
    
  UpdatePayMonthAmount(
    PaymentIdDetails?:number,  
       PaymentId? :number,
     IstalmentsAmount? :number,
     AmountPaid? :number,
    AmountRemaining? :number, 
    NoIstalments?:number,  
    monthNumber?:number,
    DateAdd? :Date,
    StatusIstalments?:number,  
   ){
    this._IPaymentOfistallmentsDetails={
      PaymentIdDetails:PaymentIdDetails,
      AmountPaid:AmountPaid,
      AmountRemaining:AmountRemaining,
      DateAdd:DateAdd,
      StatusIstalments:StatusIstalments,
      PaymentId:PaymentId,
      IstalmentsAmount:IstalmentsAmount,
      monthNumber:monthNumber,
      NoIstalments:NoIstalments
     };
    return this._HttpClient.put<any>(this._URLPathModule.UpdatePayMonthAmountURL,this._IPaymentOfistallmentsDetails,{
      headers: new HttpHeaders({ 
        
        'Content-Type': 'application/json' ,'No-Auth': 'True'
    }) }).pipe(map(result =>{
      // console.log(result)
      return result;
    }));
  }
  ExpeditedPayment(
    lonaId?:number,
    DiscountPercentage?:number, 
    AmountBeforeDiscount? :number,
   AmountAfterDiscount ? :number,
    StatusLona? :number ,
   ExpeditedPaymentDate ? :Date,
   ){
    this._IPaymentOfistallments={
      DiscountPercentage :DiscountPercentage, 
      AmountBeforeDiscount  :AmountBeforeDiscount,
     AmountAfterDiscount   :AmountAfterDiscount,
      StatusLona  :StatusLona ,
     ExpeditedPaymentDate   :ExpeditedPaymentDate,
     LonaId :lonaId,
     };
    return this._HttpClient.put<any>(this._URLPathModule.ExpeditedPaymentUrl,this._IPaymentOfistallments,{
      headers: new HttpHeaders({ 
        
        'Content-Type': 'application/json' ,'No-Auth': 'True'
    }) }).pipe(map(result =>{
      // console.log(result)
      return result;
    }));
  }



  DeleteLona(
    PaymentIdDetails?:number,  
       PaymentId? :number,
     IstalmentsAmount? :number,
     AmountPaid? :number,
    AmountRemaining? :number, 
    NoIstalments?:number,  
    monthNumber?:number,
    DateAdd? :Date,
    StatusIstalments?:number,  


    
   ){
    this._IPaymentOfistallmentsDetails={
      PaymentIdDetails:PaymentIdDetails,
       AmountPaid:AmountPaid,
      AmountRemaining:AmountRemaining,
      DateAdd:DateAdd,
      StatusIstalments:StatusIstalments,
      PaymentId:PaymentId,
      IstalmentsAmount:IstalmentsAmount,
      monthNumber:monthNumber,
      NoIstalments:NoIstalments
     };
    return this._HttpClient.put<any>(this._URLPathModule.DeleteLonaURL,this._IPaymentOfistallmentsDetails,{
      headers: new HttpHeaders({ 
        
        'Content-Type': 'application/json' ,'No-Auth': 'True'
    }) }).pipe(map(result =>{
      // console.log(result)
      return result;
    }));
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
