import { Component, OnInit } from '@angular/core';
 import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
 import PSPDFKit from "pspdfkit";
import { Observable } from 'rxjs/internal/Observable';
 import { request } from 'http';
 import { HttpClient } from '@angular/common/http';
import { URLPathModule } from '../../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { ValidatorService } from '../../Microcredit/Services/Validator/validator.service';
import { MainService } from '../../Microcredit/Services/main.service';
import { IDuelments } from '../IDuelments';
declare let $: any;
@Component({
  selector: 'ngx-issuance-loansbetween-date-report',
  templateUrl: './issuance-loansbetween-date-report.component.html',
  styleUrls: ['./issuance-loansbetween-date-report.component.scss']
})
export class IssuanceLoansbetweenDateReportComponent implements OnInit {

  ReportFormGroup:FormGroup;
  DateFrom:FormControl;
  DateTo:FormControl;
  errorList: string[];
  modalMessage: string;
  modalTitle: string;
     _IDuelments : Observable<IDuelments[]>;
 
 

  ngOnInit(): void {
    this.ReportFormGroup = this.fb.group({
      DateFrom : this.DateFrom,
      DateTo:this.DateTo
    })

}

constructor(private fb: FormBuilder,
  private validatorService: ValidatorService,
  // public toastrservice: ToastrService,
  private _MainService: MainService ,private _URLPathModule: URLPathModule,private http: HttpClient) { }
  
  _GETValueDateFrom(event) {

    this.DateFrom = event

    console.log(this.DateFrom);
  }


  
  _GETValueDateTo(event) {

    this.DateTo = event

    console.log(this.DateTo);
  }

  GETDataSYNC ( ){
   
    var GettDateFrom =this.ReportFormGroup.get('DateFrom').value

 var GetDateTo = this.ReportFormGroup.get('DateTo').value


    this._MainService.GETwithDatesAsync(GettDateFrom,
      GetDateTo,
      this._URLPathModule.ReportGetSIssuanceLoansbetweenDate
      )   .subscribe(
     (result) => {
      
      this._IDuelments=result;
    
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

