import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddNewLonaService } from '../Microcredit/Services/AddNewLona/add-new-lona.service';
// import { AddnewSalesinvoiceService } from '../Microcredit/Services/AddnewSalesinvoice/addnew-salesinvoice.service';

@Component({
  selector: 'ngx-track-lona',
  templateUrl: './track-lona.component.html',
  styleUrls: ['./track-lona.component.scss']
})
export class TrackLonaComponent implements OnInit {

  constructor(private _AddNewLonaService: AddNewLonaService, public _Httpclient : HttpClient  ) { }

  p:number=1; 
  customerName:any; 
   TracklonaPagging:  any[]=[];
  public customerId: number;


  ngOnInit(): void {
    this._AddNewLonaService.GetTrackLonaAsync().subscribe(fillTrackLonaObject => {
      this.TracklonaPagging = fillTrackLonaObject;
    });  
   }
  
 
  Search(){
    if(this.customerName == ""){
this.ngOnInit();

    }else{
      this.TracklonaPagging = this.TracklonaPagging.filter(res => {
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
