import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../Microcredit/Services/customers/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  constructor(private _CustomersService: CustomersService, public _Httpclient : HttpClient  ) { }

  p:number=1; 
  customerName:any; 
  customeresPagging:  any[]=[];
  public customerId: number;

  ngOnInit(): void {
     

 
   this._CustomersService.GETCustomersAsync().subscribe(fillcustomereObject => {
    this.customeresPagging = fillcustomereObject;
 
  } );
 
  }
  Search(){
    if(this.customerName == ""){
this.ngOnInit();

    }else{
      this.customeresPagging = this.customeresPagging.filter(res => {
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


