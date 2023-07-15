import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
 // import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { InterestRateService } from '../Microcredit/Services/InterestRate/interest-rate.service';
 import { ValidatorService } from '../Microcredit/Services/Validator/validator.service';
 // import { CategoriesService } from '../../Services/Categories/categories.service';
 declare let $: any;

@Component({
  selector: 'ngx-interest-rate',
  templateUrl: './interest-rate.component.html',
  styleUrls: ['./interest-rate.component.scss']
})
export class InterestRateComponent implements OnInit {

  //#region  Var
  errorList: string[];
  modalMessage: string;
  modalTitle: string;
  InterestRateForm:FormGroup;
  //customerId: FormControl;
  InterestRateName : FormControl;
  InterestRateValue: FormControl;
  DateAdd: FormControl;
 //#endregion Var
   //#region  Check Err
   formErrors = {
    'InterestRateName':'',
    'InterestRateValue':'',
     'DateAdd':'',
 
   };
   
   validationMessages = {
     'InterestRateName': {
       'required': '  مطلوب.',
       'minlength': 'مطلوب',
       'maxlength': 'اقصى عدد احرف مسموح به هو 50 حرف فقط',

     },
    
     
     'InterestRateValue': {
      'required': '  مطلوب.',
      'minlength': 'مطلوب',
      'maxlength': 'مطلوب',
    },
     'DateAdd': {
      'required': ' مطلوب.',
      } 
   };

   //#endregion end check Err
   constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,private _InterestRateService:InterestRateService
   ){}
  ngOnInit(): void {
    //#region  
    this.InterestRateName= new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(10)]);
     this.InterestRateValue= new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(10)]);
    this. DateAdd= new FormControl(null, [Validators.required, Validators.required]);
   //#endregion

   //#region Form 
   this.InterestRateForm = this.fb.group({
    InterestRateName:this.InterestRateName,
    InterestRateValue:this.InterestRateValue,
    DateAdd:this.DateAdd,
 
  })
//#endregion


this.InterestRateForm.valueChanges.subscribe((data) => {
  this.logValidationErrors(this.InterestRateForm);
});
  }

  logValidationErrors(group: FormGroup = this.InterestRateForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
  
      this.formErrors[key] = '';
      // abstractControl.value !== '' (This condition ensures if there is a value in the
      // form control and it is not valid, then display the validation error)
      if (abstractControl && !abstractControl.valid &&
          (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
        const messages = this.validationMessages[key];
  
        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        }
      }
  
      if (abstractControl instanceof FormGroup) {
        this.logValidationErrors(abstractControl);
      }
    });
  }
//Add new InterestRate
ADDInterestRate(){
  let InterestRateDetails = this.InterestRateForm.value;
  // console.log(InterestRateDetails)
  this.errorList = [];
  this._InterestRateService.CreateInterestRateAsync(
    InterestRateDetails.InterestRateName,
    InterestRateDetails.InterestRateValue,
    InterestRateDetails.DateAdd 

   ).subscribe(
    (result) => {
        if (result.message = 'Added successfully') {
            let timerInterval: any;
            Swal.fire({
              title: 'تم !',
              text: 'الحفظ بنجاح',
              icon: 'success',
              confirmButtonText: 'موافق'

                
             
            });
          //  this.isRegistrationInProcess = false;
        }
    },
    (error) => {
        if (error.status = 500) {
            // this.toastrservice.info('An error occured while processing this request. Check details or Try again.', '', {
            //     positionClass: 'toast-top-right'
            // });
            Swal.fire({
              title:' خطأ !',
              text: 'An error occured while processing this request. Check details or Try again',
              icon: 'error',
              confirmButtonText: 'موافق'

                
             
            });


        }
        if (error.error && error.error.value) {
            this.errorList = [];
            for (let i = 0; i < error.error.value.length; i++) {
                this.errorList.push(error.error.value[i]);
            }
            this.showModalError();
        }

     }
);
}



showModalError() {
this.modalTitle = 'Customer Error';
this.modalMessage = 'Your Registration Customer was Unsuccessful';
$('#errorModal').modal('show');
}

}
 