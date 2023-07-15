import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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


   GetValueFromRadioBtn(e) {
    window.localStorage.removeItem('localRadiobtncanCustomerBeGuanantor')
    window.localStorage.clear()
    this.SelectedRadiobtncanCustomerBeGuanantor =e.target.value

    localStorage.setItem('localRadiobtncanCustomerBeGuanantor',this.SelectedRadiobtncanCustomerBeGuanantor) ;

  }
   //#endregion end check Err
   constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,private _CustomersService:CustomersService ,public el: ElementRef 
   ){
    
    
      this.inputElement = el.nativeElement;
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
// console.log(localStorage.getItem("localStorageDateAdd"))

  }  ngOnInit(): void {

    //#region  
    this.customerForm = this.fb.group({
  

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
      
    dateAdd : this.dateAdd,


    dateEdit : this.dateEdit,
     UsersID :"1",

canCustomerBeGuanantor:   this.canCustomerBeGuanantor,
     

maxLonaForCustomer: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(1) ,    ]),
     
maxNumberGuarantorLona :new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(1) ,    ]),

SelectedRadiobtnValue:new FormControl('', [Validators.required, ])
  })

  //#endregion

 

  }
  CheckInputnumberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

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
   this.errorList = [];


  this._CustomersService.CreateCustomersAsync(
   CustomerDetails)
 
    .subscribe(
    (result) => {
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

// private navigationKeys = [
//   'Backspace',
//   'Delete',
//   'Tab',
//   'Escape',
//   'Enter',
//   'Home',
//   'End',
//   'ArrowLeft',
//   'ArrowRight',
//   'Clear',
//   'Copy',
//   'Paste'
// ];
inputElement: HTMLElement;


// @HostListener('keydown', ['$event'])
// onKeyDown(e: KeyboardEvent) {
//   if (
//     this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
//     (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
//     (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
//     (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
//     (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
//     (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
//     (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
//     (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
//     (e.key === 'x' && e.metaKey === true) // Allow: Cmd+X (Mac)
//   ) {
//     // let it happen, don't do anything
//     return;
//   }
//   // Ensure that it is a number and stop the keypress
//   if (
//     (e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
//     (e.keyCode < 96 || e.keyCode > 105)
//   ) {
//     e.preventDefault();
//   }
// }

// @HostListener('paste', ['$event'])
// onPaste(event: ClipboardEvent) {
//   event.preventDefault();
//   const pastedInput: string = event.clipboardData
//     .getData('text/plain')
//     .replace(/\D/g, ''); // get a digit-only string
//   document.execCommand('insertText', false, pastedInput);
// }

// @HostListener('drop', ['$event'])
// onDrop(event: DragEvent) {
//   event.preventDefault();
//   const textData = event.dataTransfer.getData('text').replace(/\D/g, '');
//   this.inputElement.focus();
//   document.execCommand('insertText', false, textData);
// }


showModalError() {
this.modalTitle = 'Customer Error';
this.modalMessage = 'Your Registration Customer was Unsuccessful';
$('#errorModal').modal('show');
}

}
