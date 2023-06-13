import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLPathModule } from '../../pages/Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { MainService } from '../../pages/Microcredit/Services/main.service';

@Component({
  selector: 'ngx-list-removeistallments',
  templateUrl: './list-removeistallments.component.html',
  styleUrls: ['./list-removeistallments.component.scss']
})
export class ListRemoveistallmentsComponent implements OnInit {

  constructor(private _MainService: MainService, public _Httpclient : HttpClient  ,private _URLPathModule: URLPathModule) { }

  p:number=1; 
  customerName:any; 
  PaymentOfistallmentsPagging:  any[]=[];
  public customerId: number;


  ngOnInit(): void {
 
   this._MainService.GETAllAsync(this._URLPathModule.GetAllPaymentOfistallmentsURL).subscribe(fillObject => {
    this.PaymentOfistallmentsPagging = fillObject;

 

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


