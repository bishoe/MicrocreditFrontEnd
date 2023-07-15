import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
 import Swal from 'sweetalert2';
 import { CustomersService } from '../Microcredit/Services/customers/customers.service';
import { ValidatorService } from '../Microcredit/Services/Validator/validator.service';
import { ICustomers } from '../Microcredit/Classes/icustomers';
import { Constants } from '../login/Helper/Constants';

@Component({
  selector: 'ngx-update-customers',
  templateUrl: './update-customers.component.html',
  styleUrls: ['./update-customers.component.scss']
})
export class UpdateCustomersComponent implements OnInit {
  errorList: string[];
  modalMessage: string;
  modalTitle: string;
  
  UpdatecustomerForm:FormGroup;
  customerId: FormControl;
  customerName : FormControl;
   customerNationalid: FormControl;
  expirationdatenationalID: FormControl;
  firstPhone: FormControl;
  secondPhone: FormControl;
  businessName: FormControl;
  workAddress: FormControl;
  customerAddress: FormControl;
  dateissuancenationalID: FormControl;
  notes : FormControl;
  dateAdd: FormControl;
  dateEdit:FormControl;
  UsersID: FormControl;
  maxLonaForCustomer :FormControl;
  maxNumberGuarantorLona :FormControl;
  canCustomerBeGuanantor :FormControl;;
  SelectedRadiobtnValue:  FormControl; 
  SelectedRadiobtncanCustomerBeGuanantor: any;

  _customerId:number;
   CustomerEdit:ICustomers;

GetValueFromdateissuancenationalID; //use in matInput
GETValueFromexpirationdatenationalID;//use in matInput
_GETValueFromdateAdd;//use in matInput




  //#endregion Var

    constructor(private fb: FormBuilder,private _activatedRoute: ActivatedRoute,
    private validatorService: ValidatorService,private _CustomersService:CustomersService,private router:Router
   ){}
  ngOnInit(): void {
    //#region  
 let   Getrole=localStorage.getItem(Constants.USER_KEY)

if(Getrole.indexOf('Admin')>-1){

   
      this.UpdatecustomerForm= this.fb.group({
      
        customerName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(10) ,    ]),

     customerNationalid: new FormControl('', [Validators.required, Validators.maxLength(14), Validators.minLength(14)]),

     expirationdatenationalID :     localStorage.getItem("localStorageexpirationdatenationalID")
     ,
     dateissuancenationalID : this.dateissuancenationalID,

     firstPhone:new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11) ,    ]),
     

    secondPhone:  new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(11) ,    ]),
     

      businessName: new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(1) ,    ]),
     

    workAddress : new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(1) ,    ]),
     

    customerAddress : new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(1) ,    ]),
      
     notes : new FormControl('', [Validators.required, Validators.maxLength(250), Validators.minLength(1) ,    ]),
      
    // dateAdd : this.dateAdd,


    dateEdit : this.dateEdit,
     UsersID :"1",

canCustomerBeGuanantor:   this.canCustomerBeGuanantor,
     

maxLonaForCustomer: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(1) ,    ]),
     
maxNumberGuarantorLona :new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(1) ,    ]),

SelectedRadiobtnValue:new FormControl('', [Validators.required, ]),

 
   customerId: new FormControl(null,[Validators.required]),
      });
//      this.UpdatecustomerForm = this.fb.group({
//       CustomerName: this.CustomerName,
//       customerNationalid: this.customerNationalid,
//       expirationdatenationalID :this.expirationdatenationalID,
//       firstPhone: this.firstPhone,
//      secondPhone: this.secondPhone,
//      businessName: this.businessName,
//      workAddress: this.workAddress,
//      customerAddress: this.customerAddress,
//      dateissuancenationalID: this.dateissuancenationalID,
//       notes : this.notes,
//      DateAdd: this.DateAdd,
//       UsersID: this.UsersID,
//  customerId: this.customerId,
//  maxLonaForCustomer:this.maxLonaForCustomer,
//  maxNumberGuarantorLona:this.maxNumberGuarantorLona,
//  canCustomerBeGuanantor :this.canCustomerBeGuanantor,
//  SelectedRadiobtnValue:this.SelectedRadiobtnValue
     //})
    //#endregion
  
     //#region Form 
   
    this.GETIDFROMURL();
    this.SETdataTOFORMCONTROL();  
    }else if(Getrole.indexOf('user')){  
      alert('Access denied');
      this.router.navigate(["/login"]);
      return;
    }
//#endregion


 
  }

 
//GETID FROM URL
GETIDFROMURL(){
  //GET ID FROM URL Pagging
  this._customerId= this._activatedRoute.snapshot.params['customerId'];
 }
 CheckInputnumberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;

}

SETdataTOFORMCONTROL(){

this._CustomersService.GETCustomersByIdAsync(  this._customerId).subscribe(data => {
this.CustomerEdit = data;
 
this.UpdatecustomerForm.patchValue
({

  customerId : this.CustomerEdit.customerId,//set id in object
  customerName: this.CustomerEdit.customerName,
  customerNationalid: this.CustomerEdit.customerNationalid,
  expirationdatenationalID: this.CustomerEdit.expirationdatenationalID,
  firstPhone:this.CustomerEdit.firstPhone,
  secondPhone:this.CustomerEdit.secondPhone,
  businessName:this.CustomerEdit.businessName,
  workAddress:this.CustomerEdit.workAddress,
  customerAddress:this.CustomerEdit.customerAddress,
  dateissuancenationalID:this.CustomerEdit.dateissuancenationalID,
  notes:this.CustomerEdit.notes,
    dateAdd:this.CustomerEdit.dateAdd,
  Dateedit:this.CustomerEdit.dateAdd,
  maxLonaForCustomer:this.CustomerEdit.maxLonaForCustomer,
  maxNumberGuarantorLona:this.CustomerEdit.maxNumberGuarantorLona,
  canCustomerBeGuanantor :this.SelectedRadiobtnValue,
   UsersID:1
 });
});
}
 
GETValueFromdateissuancenationalID(event) {

  this.GetValueFromdateissuancenationalID = event
  // console.log(this.GetValueFromdateissuancenationalID);
}
GETValueFromGETValueFromexpirationdatenationalID(event) {

  this.GETValueFromexpirationdatenationalID = event

  // console.log(this.GETValueFromexpirationdatenationalID);
}
GETValueFromdateAdd(event) {
  this._GETValueFromdateAdd = event
 }
UpdateCustomers() {

  this.UpdatecustomerForm.get('canCustomerBeGuanantor').setValue(this.SelectedRadiobtncanCustomerBeGuanantor);

  // this.UpdatecustomerForm.get('dateAdd').setValue(this.GETValueFromdateAdd)
  
  this.UpdatecustomerForm.get('dateEdit').setValue(new Date())
  
let updatecustomer = this.UpdatecustomerForm.value;
// console.log(updatecustomer)
this.errorList = [];
//console.log('>>>>',this._activatedRoute.snapshot.params['customerId'])

this._CustomersService.UpdateCustomersAsync(this._customerId,  updatecustomer).subscribe(
response => {
  Swal.fire({
   title: 'تم !',
   text: 'الحفظ بنجاح',
   icon: 'success',
   confirmButtonText: 'موافق'   });
  //console.log(response);
  //console.log(this.UpdatecustomerForm)
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
//#region  Check Err
formErrors = {
  'CustomerName':'',
  'dateissuancenationalID':'',
  'expirationdatenationalID':'',
  'customerNationalid':'',
  'firstPhone':'',
  'secondPhone':'',
  'businessName':'',
  'workAddress':'',
  'customerAddress':'',
   'notes':'',
'DateAdd':'',

 };
 
 validationMessages = {
   'CustomerName': {
     'required': 'الاسم مطلوب.',
     'minlength': 'الاسم لايمكن ان يقل عن 10 احرف',
     'maxlength': 'اقصى عدد احرف مسموح به هو 50 حرف فقط',

   },
  
   
   'customerNationalid': {
    'required': 'الرقم القومى مطلوب.',
    'minlength': 'الرقم لايمكن ان يقل عن 14 رقم',
    'maxlength': 'اقصى عدد ارقام مسموح به هو 14 رقم فقط',
  },
   'expirationdatenationalID': {
    'required': ' مطلوب.',
    },

    'firstPhone': {
      'required': '  مطلوب.',
      'minlength': 'الرقم لايمكن ان يقل عن 11 رقم',
      'maxlength': 'اقصى عدد ارقام مسموح به هو 11 رقم فقط',
    },
    'secondPhone': {
      'required': '  مطلوب.',
      'minlength': 'الرقم لايمكن ان يقل عن 11 رقم',
      'maxlength': 'اقصى عدد ارقام مسموح به هو 11 رقم فقط',
    },
    'businessName': {
      'required': '  مطلوب.',
      'minlength': 'الرقم لايمكن ان يقل عن 1 حرف',
      'maxlength': 'اقصى عدد احرف مسموح به هو 250 حرف فقط',
    },
    'workAddress': {
      'required': '  مطلوب.',
      'minlength': 'الرقم لايمكن ان يقل عن 1 حرف',
      'maxlength': 'اقصى عدد احرف مسموح به هو 250 حرف فقط',
    },
    'customerAddress': {
      'required': '  مطلوب.',
      'minlength': 'الرقم لايمكن ان يقل عن 1 حرف',
      'maxlength': 'اقصى عدد احرف مسموح به هو 250 حرف فقط',
    },
    'dateissuancenationalID': {
      'required': ' مطلوب.',
    },
   
    'notes': {
      'required': '  مطلوب.',
      'minlength': 'الرقم لايمكن ان يقل عن 1 حرف',
      'maxlength': 'اقصى عدد احرف مسموح به هو 250 حرف فقط',
    },
    'DateAdd': {
      'required': '  مطلوب.',
     },
 };
 
 //#endregion end check Err

  
showModalError() {
 this.modalTitle = 'Error Update  ';
 this.modalMessage = 'Error Update Customer';
 

}
GetValueFromRadioBtn(e) {
  window.localStorage.removeItem('localRadiobtncanCustomerBeGuanantor')

  window.localStorage.clear()

  this.SelectedRadiobtncanCustomerBeGuanantor =e.target.value

  localStorage.setItem('localRadiobtncanCustomerBeGuanantor',this.SelectedRadiobtncanCustomerBeGuanantor) ;

}

logValidationErrors(group: FormGroup = this.UpdatecustomerForm): void {
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