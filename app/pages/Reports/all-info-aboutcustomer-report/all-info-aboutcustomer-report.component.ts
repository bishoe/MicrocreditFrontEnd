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
  selector: 'ngx-all-info-aboutcustomer-report',
  templateUrl: './all-info-aboutcustomer-report.component.html',
  styleUrls: ['./all-info-aboutcustomer-report.component.scss']
})
export class AllInfoAboutcustomerReportComponent implements OnInit {

  ReportFormGroup:FormGroup;
  CustomerID:FormControl;
   errorList: string[];
  modalMessage: string;
  modalTitle: string;
     _IDuelments : Observable<IDuelments[]>;
 
  ngOnInit(): void {
    this.ReportFormGroup = this.fb.group({
      CustomerID : this.CustomerID,
     })

}

constructor(private fb: FormBuilder,
  private validatorService: ValidatorService,private _MainService: MainService ,private _URLPathModule: URLPathModule,private http: HttpClient) { }
  
 


  
 

  GETDataSYNC ( ){
    
    let _CustomerID = this.ReportFormGroup.value
    

 
 

    this._MainService.GETByIdAsync( _CustomerID.CustomerID,
      this._URLPathModule. AllinfoAboutcustomerReportURL
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


