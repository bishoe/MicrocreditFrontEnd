import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InterestRateService } from '../Microcredit/Services/InterestRate/interest-rate.service';

@Component({
  selector: 'ngx-list-interest-rate',
  templateUrl: './list-interest-rate.component.html',
  styleUrls: ['./list-interest-rate.component.scss']
})
export class ListInterestRateComponent implements OnInit {
  constructor(private _InterestRateService: InterestRateService, public _Httpclient : HttpClient  ) { }

  p:number=1; 
  InterestRateName:any; 
   InterestRatePagging:  any[]=[];
  public InterestRateId: number;


  ngOnInit(): void {
 
   this._InterestRateService.GETInterestRateAsync().subscribe(fillcustomereObject => {
    this.InterestRatePagging = fillcustomereObject;

 

   } );
  }
  
 
  Search(){
    if(this.InterestRateName == ""){
this.ngOnInit();

    }else{
      this.InterestRatePagging = this.InterestRatePagging.filter(res => {
        return res.InterestRateName.toLocaleLowerCase().match(this.InterestRateName.toLocaleLowerCase());
      })
    }
  }
 
key: string ='InterestRateId';
reverse:boolean =false;
sort(key){
this.key = key;
this.reverse =!this.reverse;
}


}


