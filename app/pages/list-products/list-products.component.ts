import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { URLPathModule } from '../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { MainService } from '../Microcredit/Services/main.service';

@Component({
  selector: 'ngx-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor(private _MainService: MainService, public _Httpclient : HttpClient  ,private _URLPathModule: URLPathModule) { }

  p:number=1; 
  prodouctName:any; 
  ListProductsPagging:  any[]=[];
 

  ngOnInit(): void {
 
   this._MainService.GETAllAsync(this._URLPathModule.ListProductsURL).subscribe(fillObject => {
    this.ListProductsPagging = fillObject;

 

   } );
  }
  
 
  Search(){
    if(this.prodouctName == ""){
this.ngOnInit();

    }else{
      this.ListProductsPagging = this.ListProductsPagging.filter(res => {
        return res.prodouctName.toLocaleLowerCase().match(this.prodouctName.toLocaleLowerCase());
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


