import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { URLPathModule } from '../../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { ValidatorService } from '../../Microcredit/Services/Validator/validator.service';
import { MainService } from '../../Microcredit/Services/main.service';
declare let $: any;
@Component({
  selector: 'ngx-all-issuance-loans-report',
  templateUrl: './all-issuance-loans-report.component.html',
  styleUrls: ['./all-issuance-loans-report.component.scss']
})
export class AllIssuanceLoansReportComponent implements OnInit {

  ReportFormGroup:FormGroup;
  CustomerID:FormControl;
   errorList: string[];
  modalMessage: string;
  modalTitle: string;
  
  ngOnInit(): void {
    this.ReportFormGroup = this.fb.group({
      // CustomerID : this.CustomerID,
     })

}

constructor(private fb: FormBuilder,
  private validatorService: ValidatorService,private _MainService: MainService ,private _URLPathModule: URLPathModule,private http: HttpClient) { }
  
  GETIssuanceLoans( ){
    this._MainService.GETAllAsync( 
      this._URLPathModule. ReportAllIssuanceLoansURL
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
    
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';

}

