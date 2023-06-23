import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 import Swal from 'sweetalert2';
import { IInterestRate } from '../Microcredit/Classes/iinterest-rate';
import { InterestRateService } from '../Microcredit/Services/InterestRate/interest-rate.service';
  import { ValidatorService } from '../Microcredit/Services/Validator/validator.service';
import { Constants } from '../login/Helper/Constants';

@Component({
  selector: 'ngx-update-interest-rate',
  templateUrl: './update-interest-rate.component.html',
  styleUrls: ['./update-interest-rate.component.scss']
})
export class UpdateInterestRateComponent implements OnInit {
  errorList: string[];
  modalMessage: string;
  modalTitle: string;
    //#region  Var
     InterestRateForm:FormGroup;
     UpdateInterestRateForm;
     GetValueFromdateAdd; //use in matInput
     interestRateName : FormControl;
    interestRateValue: FormControl;
    DateAdd: FormControl;
    _InterestRateId :number;
    GetInterestRateIdFromUrl:number;
    InterestRateEdit:IInterestRate;
    //#endregion Var
     //#region  Check Err
     formErrors = {
      'interestRateName':'',
      'interestRateValue':'',
      //  'DateAdd':'',
   
     };
     
     validationMessages = {
       'interestRateName': {
         'required': '  مطلوب.',
         'minlength': 'مطلوب',
         'maxlength': 'اقصى عدد احرف مسموح به هو 50 حرف فقط',
  
       },
      
       
       'interestRateValue': {
        'required': '  مطلوب.',
        'minlength': 'مطلوب',
        'maxlength': 'مطلوب',
      },
 
     };
     CheckInputnumberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
  
    }
     //#endregion end check Err
     constructor(private fb: FormBuilder,private _activatedRoute: ActivatedRoute,
      private validatorService: ValidatorService,private _InterestRateService:InterestRateService,private router: Router
     ){}
    ngOnInit(): void {
      let   Getrole=localStorage.getItem(Constants.USER_KEY)

if(Getrole.indexOf('Admin')>-1){
  this.UpdateInterestRateForm= new FormGroup({
    interestRateName: new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
    interestRateValue:new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
    interestRateId:new FormControl(null,[Validators.required])
  //#endregion
});  
 //#region Form 
 this.InterestRateForm = this.fb.group({
  interestRateName:this.interestRateName,
  interestRateValue:this.interestRateValue,

});
 this.GETIDFROMURL();
    this.SETdataTOFORMCONTROL();  
  
}else if(Getrole.indexOf('user')){  
  alert('Access denied');
  this.router.navigate(["/login"]);
  return;
}
      //#region  

   

    //#endregion
  
}
  //GETID FROM URL
 

GETIDFROMURL(){
  //GET ID FROM URL Pagging
  this._InterestRateId= this._activatedRoute.snapshot.params['interestRateId'];
   this. GetInterestRateIdFromUrl = this._InterestRateId
  console.log(this.GetInterestRateIdFromUrl)
}

SETdataTOFORMCONTROL(){
 this._InterestRateService.GETInterestRateByIdAsync( this.GetInterestRateIdFromUrl).subscribe(data => {
this.InterestRateEdit = data;
 
this.UpdateInterestRateForm.patchValue
({

  interestRateId : this.InterestRateEdit.interestRateId,//set id in object
  interestRateName: this.InterestRateEdit.interestRateName,
  interestRateValue: this.InterestRateEdit.interestRateValue,
  // dateAdd: this.InterestRateEdit.dateAdd,
  });
});
}
 
UpdateInterestRate() {


  let UpdateInterestRate = this.UpdateInterestRateForm.value;
  this.errorList = [];
   
  this._InterestRateService.UpdateInterestRateAsync(this._InterestRateId,  UpdateInterestRate).subscribe(
  response => {
    Swal.fire({
     title: 'تم !',
     text: 'الحفظ بنجاح',
     icon: 'success',
     confirmButtonText: 'موافق'   });
   },
  error => {
  
    if (error.status == 500) {
      // this.toastrservice.info('An error occured while processing this request. Check details or Try again.', '', {
      //   positionClass: 'toast-top-right'
      // });
      Swal.fire({
        title: 'خطأ !',
        text: 'An error occured while processing this request. Check details or Try again',
        icon: 'error',
        confirmButtonText: 'موافق'   });
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
    //#endregion end check Err
   
  showModalError() {
   this.modalTitle = 'Error Update  ';
   this.modalMessage = 'Error Update Customer';
   
  
  }
  logValidationErrors(group: FormGroup = this.UpdateInterestRateForm): void {
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
  }