import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
 // import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { CustomersService } from '../Microcredit/Services/customers/customers.service';
import { ValidatorService } from '../Microcredit/Services/Validator/validator.service';
import {MatRadioModule} from '@angular/material/radio';

 // import { CategoriesService } from '../../Services/Categories/categories.service';
 declare let $: any;

@Component({
  selector: 'ngx-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
 
})

export class CustomersComponent implements OnInit {
  //#region  Var
  GETValueFromexpirationdatenationalID;
  GETValueFromdateissuancenationalID;
  GETValueFromDateAdd;
  errorList: string[];
  modalMessage: string;
  modalTitle: string;
  customerForm:FormGroup;
  customerId: FormControl;
  customerName : FormControl;
  customerNationalid: FormControl;
  expirationdatenationalID: FormControl;
  firstPhone: FormControl;
  secondPhone: FormControl;
  businessName: FormControl;
  workAddress: FormControl;
  customerAddress: FormControl;
  dateissuancenationalID : FormControl;;
  notes : FormControl;
  dateAdd = new FormControl(new Date());
  dateEdit= new FormControl(new Date());
  UsersID: FormControl;
  maxLonaForCustomer :FormControl;
  maxNumberGuarantorLona :FormControl;
  canCustomerBeGuanantor :FormControl;;
  SelectedRadiobtnValue:  FormControl;
   SelectedRadiobtncanCustomerBeGuanantor: any;
 
 
 //#endregion Var
   //#region  Check Err
   formErrors = {
    'customerName':'',
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
'maxLonaForCustomer':'',
'maxNumberGuarantorLona' :'',
'canCustomerBeGuanantor' :'',
'SelectedRadiobtnValue':''  

   };
   
   validationMessages = {
     'customerName': {
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
       'maxNumberGuarantorLona': {
        'required': '  مطلوب.',
       },
      'canCustomerBeGuanantor': {
        'required': '  مطلوب.',
       },
      'maxLonaForCustomer': {
        'required': '  مطلوب.',
       },

   };


   onChange(e) {
    window.localStorage.removeItem('localRadiobtncanCustomerBeGuanantor')
    window.localStorage.clear()
    this.SelectedRadiobtncanCustomerBeGuanantor =e.target.value

    localStorage.setItem('localRadiobtncanCustomerBeGuanantor',this.SelectedRadiobtncanCustomerBeGuanantor) ;

  }
   //#endregion end check Err
   constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,private _CustomersService:CustomersService  
   ){
 
  
  }

  _GETValueFromexpirationdatenationalID(event) {

    this.GETValueFromexpirationdatenationalID = event

     localStorage.removeItem("localStorageexpirationdatenationalID")

    localStorage.setItem("localStorageexpirationdatenationalID",event)
   }

  _GETValueFromdateissuancenationalID(event) {

    this.GETValueFromdateissuancenationalID = event
    localStorage.removeItem("localStoragedateissuancenationalID")

localStorage.setItem("localStoragedateissuancenationalID",event)
   }

  
  _GETValueFromDateAdd(event) {

    this.GETValueFromDateAdd = event

    localStorage.removeItem("localStorageDateAdd")

    localStorage.setItem("localStorageDateAdd",event)
console.log(localStorage.getItem("localStorageDateAdd"))

  }  ngOnInit(): void {

    //#region  
    this.customerForm = this.fb.group({
  

    customerName: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(10)]),

     customerNationalid: new FormControl('', [Validators.required, ]),

     expirationdatenationalID :     localStorage.getItem("localStorageexpirationdatenationalID")
     ,
     dateissuancenationalID : this.dateissuancenationalID,

     firstPhone:new FormControl('', [Validators.required, ]),
     

    secondPhone:  new FormControl('', [Validators.required, ]),
     

      businessName: new FormControl('', [Validators.required, ]),
     

    workAddress : new FormControl('', [Validators.required, ]),
     

    customerAddress : new FormControl('', [Validators.required, ]),
     

     

     notes : new FormControl('', [Validators.required, ]),
     

    dateAdd : this.dateAdd,


    dateEdit : this.dateEdit,
     UsersID :"1",

canCustomerBeGuanantor:   this.canCustomerBeGuanantor,
     

maxLonaForCustomer: new FormControl('', [Validators.required, ]),
     
maxNumberGuarantorLona :new FormControl('', [Validators.required, ]),

SelectedRadiobtnValue:new FormControl('', [Validators.required, ])
  })

  //#endregion

 

  }

  logValidationErrors(group: FormGroup = this.customerForm): void {
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

  ngOnDestory(){
    localStorage.clear()
    }


//Add new Customer
AddCustomer(){


   this.customerForm.get('canCustomerBeGuanantor').setValue(this.SelectedRadiobtncanCustomerBeGuanantor);

    const date: Date = new Date(new Date().toLocaleDateString());

   
this.customerForm.get('dateissuancenationalID').setValue(this.GETValueFromdateissuancenationalID)
this.customerForm.get('expirationdatenationalID').setValue(this.GETValueFromexpirationdatenationalID)
this.customerForm.get('dateAdd').setValue(this.GETValueFromDateAdd)
this.customerForm.get('dateEdit').setValue(this.GETValueFromDateAdd)

 

  let CustomerDetails = this.customerForm.value;
  console.log(CustomerDetails)
  this.errorList = [];


  this._CustomersService.CreateCustomersAsync(
   CustomerDetails)
 
    .subscribe(
    (result) => {
  console.log(    result)
      if(result.message != 'Added successfully'){
        Swal.fire({
          title: 'تحذير !',
          text: result.message,
          icon: 'error',
          confirmButtonText: 'موافق'
         });
      }else if (result.message = 'Added successfully') {
        
            let timerInterval: any;
            Swal.fire({
              title: 'تم !',
              text: 'الحفظ بنجاح',
              icon: 'success',
              confirmButtonText: 'موافق'
             });
          //  this.isRegistrationInProcess = false;
        }else{
          Swal.fire({
             
            text: 'لم يتم الحفظ',
            icon: 'error',
            confirmButtonText: 'موافق'
           });
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
