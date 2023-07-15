import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { URLPathModule } from '../../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { ValidatorService } from '../../Microcredit/Services/Validator/validator.service';
import { MainService } from '../../Microcredit/Services/main.service';
import { IDuelments } from '../IDuelments';
declare let $: any;

@Component({
  selector: 'ngx-payment-ofistallmentsbetween-date-report',
  templateUrl: './payment-ofistallmentsbetween-date-report.component.html',
  styleUrls: ['./payment-ofistallmentsbetween-date-report.component.scss']
})
export class PaymentOfistallmentsbetweenDateReportComponent implements OnInit {

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
  private validatorService: ValidatorService,private _MainService: MainService ,private _URLPathModule: URLPathModule,private http: HttpClient) { }
  
  _GETValueDateFrom(event) {

    this.DateFrom = event

    // console.log(this.DateFrom);
  }


  
  _GETValueDateTo(event) {

    this.DateTo = event

    // console.log(this.DateTo);
  }

  GETDataSYNC ( ){
   
    var GettDateFrom =this.ReportFormGroup.get('DateFrom').value

 var GetDateTo = this.ReportFormGroup.get('DateTo').value


    this._MainService.GETwithDatesAsync(GettDateFrom,
      GetDateTo,
      this._URLPathModule.ReportGETpaymentOfistallmentsbetweenDateURL
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
    

   src = 'http://localhost:8010/assets/Report/paymentOfistallments.pdf';
 

}


