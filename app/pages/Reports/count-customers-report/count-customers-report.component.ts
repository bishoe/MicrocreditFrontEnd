import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { URLPathModule } from '../../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { ValidatorService } from '../../Microcredit/Services/Validator/validator.service';
import { MainService } from '../../Microcredit/Services/main.service';
declare let $: any;

@Component({
  selector: 'ngx-count-customers-report',
  templateUrl: './count-customers-report.component.html',
  styleUrls: ['./count-customers-report.component.scss']
})
export class CountCustomersReportComponent implements OnInit {

  ReportFormGroup:FormGroup;
  CustomerID:FormControl;
   errorList: string[];
  modalMessage: string;
  modalTitle: string;
  
  ngOnInit(): void {
    this.ReportFormGroup = this.fb.group({
      CustomerID : this.CustomerID,
     })

}

constructor(private fb: FormBuilder,
  private validatorService: ValidatorService,private _MainService: MainService ,private _URLPathModule: URLPathModule,private http: HttpClient) { }
  
 


  
 

  GETCountCustomers ( ){
    
      
    this._MainService.GETAllAsync( 
      this._URLPathModule. GetCountCustomersReportURL
      )   .subscribe(
     (result) => {
      
     
     },
     (error) => {
         if (error.status == 500) {
            //  this.toastrservice.info('An error occured while processing this request. Check details or Try again.', '', {
            //      positionClass: 'toast-top-right'
            //  });
         }
         if (error.error && error.error.value) {
             this.errorList = [];
             for (let i = 0; i < error.error.value.length; i++) {
                 this.errorList.push(error.error.value[i]);
             }
             this.showModalError();
         }
       });
    
    
       }
      showModalError() {
       this.modalTitle = '  Error';
       this.modalMessage = 'Error  ';
       $('#errorModal').modal('show');
    }
    
    src = './assets/Report/ReportAllIssuanceLoans.pdf';

}


