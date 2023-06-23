import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLPathModule } from '../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { MainService } from '../Microcredit/Services/main.service';
import { PaymentOfistallmentsService } from '../Microcredit/Services/payment-ofistallments.service';

@Component({
  selector: 'ngx-list-payment-ofistallments',
  templateUrl: './list-payment-ofistallments.component.html',
  styleUrls: ['./list-payment-ofistallments.component.scss']
})
export class ListPaymentOfistallmentsComponent implements OnInit {

  constructor(private _MainService: MainService, public _Httpclient : HttpClient  ,private _URLPathModule: URLPathModule) { }

  p:number=1; 
  customerName:any; 
  PaymentOfistallmentsPagging:  any[]=[];
  public customerId: number;


  ngOnInit(): void {
 
   this._MainService.GETAllAsync(this._URLPathModule.GetAllPaymentOfistallmentsURL).subscribe(fillObject => {
    this.PaymentOfistallmentsPagging = fillObject;
    console.log(this.PaymentOfistallmentsPagging)

   } );
  }
  
 
  Search(){
    if(this.customerName == ""){
this.ngOnInit();

    }else{
      this.PaymentOfistallmentsPagging = this.PaymentOfistallmentsPagging.filter(res => {
        return res.customerName.toLocaleLowerCase().match(this.customerName.toLocaleLowerCase());
      })
    }
  }
 
key: string ='customerId';
reverse:boolean =false;
sort(key){
this.key = key;
this.reverse =!this.reverse;
}


}


