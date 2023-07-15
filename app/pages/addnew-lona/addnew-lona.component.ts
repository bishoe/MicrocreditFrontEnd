import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { IAddLona } from '../Microcredit/Classes/iadd-lona';
import { IProducts } from '../Microcredit/Classes/iproducts';
import { AddNewLonaService } from '../Microcredit/Services/AddNewLona/add-new-lona.service';
import { Observable } from 'rxjs/internal/Observable';
import { SearchproductbyService } from '../Microcredit/Services/Searchproductby/searchproductby.service';
import { ICustomers } from '../Microcredit/Classes/icustomers';
import { InterestRateService } from '../Microcredit/Services/InterestRate/interest-rate.service';
import { URLPathModule } from '../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { IInterestRate } from '../Microcredit/Classes/iinterest-rate';
import { CustomersService } from '../Microcredit/Services/customers/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { time } from 'console';
import { timer } from 'rxjs';

declare let $: any;

@Component({
  selector: 'ngx-addnew-lona',
  templateUrl: './addnew-lona.component.html',
  styleUrls: ['./addnew-lona.component.scss']
})
export class AddnewLonaComponent implements OnInit {
  //#region var
  _AddNewLonaForm: FormGroup;
  _IAddLona: IAddLona;
  InputLonaGuarantor: FormControl;
  InputProdcutId: FormControl;
  InputCustomerId: FormControl;
  InputcustomerNationalid: FormControl;
  InputcustomerName: FormControl;
  InputAmountLona: FormControl;
  InputMonthNumber: FormControl;
  InputInterestRateid: FormControl;
  InputMonthFormControl: FormControl;
  InputIstalmentsNo: FormControl;
  InputAmountBeforeAddInterest: FormControl;
  InputAmountAfterAddInterest: FormControl;
  TextNameCounter = new FormControl();
  //#region auto complete and search
  prodouctsIDControl = new FormControl('');
  customerIDControl = new FormControl('');
  TextSearchCustomercode = new FormControl();
  DropdownInterestRate: FormControl;
  filteredOptionsProduct: any; //use in autocomplete search 
  filteredOptionsCustomer: any;
  // GETprodouctsIDFromSearchText: any;
  // GETCustomerIDSearchText:any[];
  // GETCustomerCodeSearchText:any[];
  // GETCustomerNationalidSearchText:any[];
  TestScope;
  // Getcustomername:any;
  // GETCustomeName;
  //
  _localStorageprodouctsID: any; //Save id  use in GetProductIDFromSearchText();
  _localStoragecustomerId: any; // Save id local storg 
  public GetCustomerIDFromSearch// save Id use in GetCustomerIDFromSearchText() ;
  public GetCustomerNameFromSearch// save Id use in GetCustomerIDFromSearchText() ;
  public GetcustomerNationalidFromSearch// save Id use in GetCustomerIDFromSearchText() ;

  _GETALLInterestRate: IInterestRate[]; //GETALLInterestRate
  GetIdFromDropdownInterestRate;
  //#endregion


  //
  public CounterAddNewElement = 1; // use to count row in grid 
  SaveIndexLoop: number;
  //
  ////////////////Err
  pageTitle: string;
  errorList: string[];
  modalMessage: string;
  modalTitle: string;
  ////////////////Err
  //#region
  //  AddnewLonaDetails; 
  GetvalueFromInputLonaGuarantor: number;
  //GetvalueFromInputProdcutId: number;
  GetvalueFromSearchCustomer;
  //GetvalueFromInputMonthNumber: number;
  GetCustomernameFromAutocomplete: any;
  GetCustomerCodeFromAutocomplete: any;
  GetNationalidFromAutocomplete: any;

  // SearchCustomerBycode
  GetCustomername;//SearchCustomerBycode

  // GetCustomerCode;
  // GetcustomerNationalid;
  // end SearchCustomerBycode
  GETValueFromStartDateLona;
  GETValueFromEndDateLona;
  GETValueFromDateAdd;
  _customerIdfromurl:any;
    GetcustomerNamefromurl = '';
  GetcustomerNationalidfromurl;
  //#endregion


  ////GetMAxLonaGuarantor

  _GetMAxLonaGuarantor;
 Checkstatus_BAddDatainaddNewItemInFormGroup; 
  //////////////////

  //#endregion var
  constructor(private fb: FormBuilder, public _AddNewLonaService: AddNewLonaService, private _SearchproductbyService: SearchproductbyService, public _InterestRateService: InterestRateService, private _CustomersService: CustomersService, private _URLPathModule: URLPathModule, private _activatedRoute: ActivatedRoute,private router:Router) {

    // this.functions()
    this.initializAutoComplete();


  }
ngOnDestory(){
localStorage.clear()
}
formErrors = {
  'InputAmountLona':'',
  'InputMonthNumber':'',
     

 };
 
 validationMessages = {
   'InputAmountLona': {
     'required': '  مطلوب.',
     'minlength': ' ',
     'maxlength': ' ',

   },
  
   
   'InputMonthNumber': {
    'required': '  مطلوب.',
    'minlength': ' ',
    'maxlength': ' ',
  } 
 };

  initializAutoComplete() {
    this.filteredOptionsProduct = this.prodouctsIDControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filterBYProductName(val || '')
      })
    ),


    this.filteredOptionsCustomer = this.customerIDControl
    .valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filterBYCustomerName(val || '')
      })
    )
  }
  //#region Search Product
  GetProductIDFromSearchText(iProducts: IProducts) {
    if (iProducts) {
      this._localStorageprodouctsID = 0;
      this._localStorageprodouctsID = iProducts.prodouctsID;
      localStorage.setItem("prodouctsID", this._localStorageprodouctsID);
      // console.log(this._localStorageprodouctsID)

      return iProducts.prodouctName;
    }

  }
  GetProductIDandSetIDINTEXT() {
    this._AddNewLonaForm.get('ProdcutId').setValue
      (localStorage.getItem("prodouctsID"))
    localStorage.removeItem("prodouctsID");

  }
  filterBYProductName(val: string): Observable<any> {
    return this._SearchproductbyService.getData(this._URLPathModule.ProductsURL)
      .pipe(
        map(response => response.filter(option => {

          return option.prodouctName.toLowerCase().indexOf(val.toLowerCase()) === 0//,
        }))

      )
  }
  //#endregion End search product

  //#region Search Customer

  GetInputLonaGuarantorFromSearchText(icustomers: ICustomers) {
    if (icustomers) {
      //  this.GetCustomerIDFromSearch = 0;

      this.GetCustomerIDFromSearch = icustomers.customerId;
      this.GetCustomerNameFromSearch = icustomers.customerName;
      this.GetcustomerNationalidFromSearch = icustomers.customerNationalid

      localStorage.setItem("localstorgecustomerId", this.GetCustomerIDFromSearch);
      localStorage.setItem("localstorgecustomername", this.GetCustomerNameFromSearch)
      // console.log(localStorage.getItem("localstorgecustomername"))

      localStorage.setItem("localstorgecustomerNationalid", this.GetcustomerNationalidFromSearch)

      return icustomers.customerName;
    }
 
  }
  //Add this id in hidden input  or var
  GetCustomerIDandSetIDINTEXT() {
// console.log(localStorage.getItem("localstorgecustomerId"))
    for (let index = 0; index <= this.CounterAddNewElement; index++) {
      var IndexLoop = index;
      var indexstring = String(IndexLoop)
      if (localStorage.getItem("localstorgecustomerId") == this._customerIdfromurl) {
   
        Swal.fire({
           text: '  عفوا لايمكن للعميل ان يكون ضامن وعميل فى نفس القرض ',
          icon: 'error',
          confirmButtonText: 'موافق',

        })
        window.stop()
        return;
      }  

      this._GetMAxLonaGuarantor = localStorage.getItem("localstorgecustomerId")


      this._CustomersService.SearchcanCustomerBeGuanantorStatuses(this._GetMAxLonaGuarantor).subscribe(
        (resultLonaGuarantor) => {
         localStorage.setItem('localCheckstatus_BAddDatainaddNewItemInFormGroup','false')
      
       if(resultLonaGuarantor =='' )localStorage.setItem('localCheckstatus_BAddDatainaddNewItemInFormGroup','true') 
       
      
      //  console.log(resultLonaGuarantor)
        if(resultLonaGuarantor[0].canCustomerBeGuanantor ==0){
        Swal.fire({
           text: 'لايوجد صلاحيه لهذا العميل ان يكون ضامن' 
          // + resultLonaGuarantor.length + resultLonaGuarantor[0].maxNumberGuarantorLona,
          ,icon: 'error',
          
        }),
       ///////////////////////////////////////////////////
        this.Checkstatus_BAddDatainaddNewItemInFormGroup=false
        // return;
        window.stop()
      }else{
      this.Checkstatus_BAddDatainaddNewItemInFormGroup=true}
       })
      //
      
      //
      this._CustomersService.SearchLonaGuarantorStatusIdAsync(this._GetMAxLonaGuarantor).subscribe(
        (resultLonaGuarantor) => {
      
          // console.log(resultLonaGuarantor);
          localStorage.setItem('localCheckstatus_BAddDatainaddNewItemInFormGroup','false')
      
      if(resultLonaGuarantor == ''){localStorage.setItem('localCheckstatus_BAddDatainaddNewItemInFormGroup','true')
      
       
      }
       
        else if (resultLonaGuarantor.length >= resultLonaGuarantor[0].maxNumberGuarantorLona) {
            Swal.fire({
      
              text: 'عفوا الضامن تخطى الحد المسموح للضمان باكثر من قرض' 
              // + resultLonaGuarantor.length + resultLonaGuarantor[0].maxNumberGuarantorLona,
              ,icon: 'error',
            }),
            localStorage.setItem('localCheckstatus_BAddDatainaddNewItemInFormGroup','false')
            window.stop()  
             return;
          }else{
            localStorage.setItem('localCheckstatus_BAddDatainaddNewItemInFormGroup','true')
        
        }
      }); 
       //add data from autocompelet to text runtime
         //#region 
           this.Checkstatus_BAddDatainaddNewItemInFormGroup=localStorage.getItem('localCheckstatus_BAddDatainaddNewItemInFormGroup')
      
             if( this.Checkstatus_BAddDatainaddNewItemInFormGroup == 'true'){
           
            if (this._AddNewLonaForm.get('iAddLonaInput').get (indexstring).get("InputLonaGuarantor").value == '')this._AddNewLonaForm.get('iAddLonaInput').get(indexstring).get('InputLonaGuarantor').setValue(localStorage.getItem("localstorgecustomerId"))
         
            if (this._AddNewLonaForm.get('iAddLonaInput').get(indexstring).get("InputcustomerName").value == '') {
      
             this._AddNewLonaForm.get('iAddLonaInput').get(indexstring).get('InputcustomerName').setValue(localStorage.getItem("localstorgecustomername"))
            }
             if (this._AddNewLonaForm.get('iAddLonaInput').get(indexstring).get("InputcustomerNationalid").value == '') {
              this._AddNewLonaForm.get('iAddLonaInput').get
                (indexstring).get('InputcustomerNationalid').setValue(localStorage.getItem('localstorgecustomerNationalid'))
            }
      
      
      
          }
      
          if (this.GetCustomernameFromAutocomplete == null) this.GetCustomernameFromAutocomplete = localStorage.getItem('localstorgecustomername')
      
          if (this.GetCustomerCodeFromAutocomplete == null) this.GetCustomerCodeFromAutocomplete = localStorage.getItem("localstorgecustomerId")
      
          if (this.GetNationalidFromAutocomplete == null) this.GetNationalidFromAutocomplete = localStorage.getItem("localstorgecustomerNationalid")
      
      
  }
}
filterBYCustomerName(val: string): Observable<any> {
  return this._SearchproductbyService.getData(this._URLPathModule.CustomersURL)
    .pipe(
      map(response => response.filter(options => {
        localStorage.setItem('Localstoragegetcustomer', options);

        return options.customerName.toLowerCase().indexOf(val.toLowerCase()) === 0//,

      }))

    )
}
  //#endregion
  

  //#region  GetInterestRate
  GETALLInterestRate() {
    this._InterestRateService.GETInterestRateAsync().subscribe((TempGETALLInterestRate) => {
      this._GETALLInterestRate = TempGETALLInterestRate
    })

  }
  GetInterestRateId() {
    this.GetIdFromDropdownInterestRate = this._AddNewLonaForm.get('DropdownInterestRate').value
  }
  //#endregion 
  ngOnInit(): void {

    // this.InputcustomerName = new FormControl(['', Validators.required]),
      this.InputcustomerNationalid = new FormControl(['', Validators.required]),
      this.TextSearchCustomercode = new FormControl(['', Validators.required]),
      this.TextNameCounter = new FormControl(['', Validators.required]),
      // this.InterestRateid =new FormControl(['',Validators.required]),
      this._AddNewLonaForm = this.fb.group({

        ProdcutId: ['', Validators.required],
        // GetIdFromDropdownInterestRate:['',Validators.required],
        // InputCustomerId:['',Validators.required],
        // InputcustomerNationalid:['',Validators.required],
        // TextNameCounter:['',Validators.required],
        DropdownInterestRate: ['', Validators.required],

        InputAmountLona:  new FormControl('', [Validators.required, Validators.maxLength(6), Validators.minLength(6) ,    ]),

        InputMonthNumber:  new FormControl('12', [Validators.required, Validators.maxLength(6), Validators.minLength(6) ,    ]),

        // StartDateLona:['',Validators.required],
        // EndDateLona:['',Validators.required],
        DateAdd: ['', Validators.required],
        // InputAmountBeforeAddInterest:['',Validators.required],
        // InputAmountAfterAddInterest:['',Validators.required],
        //InputIstalmentsNo:['',Validators.required],
        // StatusLona:['',Validators.required],
        // LonaGuarantorFirst:[''],
        // LonaGuarantorSecond:[''],
        // LonaGuarantorThird:[''],
        // LonaGuarantorFourth:[''],


        iAddLonaInput: this.fb.array([
          this.addNewItemInFormGroup()
        ]),

      })
    this._IAddLona = {
      ProdcutId: null,
      CustomerId: null,
      interestRateid: null,
      monthNumber: null,
      StartDateLona: null,
      EndDateLona: null,
      dateAdd: this.GETValueFromDateAdd,
      AmountBeforeAddInterest: null,
      AmountAfterAddInterest: null,
      // IstalmentsNo:null,
      StatusLona: null,
        iAddLonaInput:[],
      NoColumn: null,
    };
    this.GETIDFROMURL() 
    this.initializAutoComplete();
    this.SearchCustomerBycode( this._activatedRoute.snapshot.params['customerId'])

  }
  addNewItemInFormGroup(): FormGroup {
    return this.fb.group({
      InputLonaGuarantor: ['', Validators.required],
      InputcustomerName:['',Validators.required],
      InputcustomerNationalid:['']
      // InputProdcutId:['', Validators.required],
      // InputInterestRateid: ['', Validators.required],

    });
  }

  //#region   
  ///////Get currunt Lona and status and guarantor status  and check if status == MaxNumberGuarantorLona

  CounterAddNewElementFunc() {
    this.CounterAddNewElement++;
  }

  _GETValueFromStartDateLona(event) {

    this.GETValueFromStartDateLona = event

    // console.log(this.GETValueFromStartDateLona);
  }

  _GETValueFromEndDateLona(event) {

    this.GETValueFromEndDateLona = event

    // console.log(this.GETValueFromEndDateLona);
  }

  _GETValueFromDateAdd(event) {

    this.GETValueFromDateAdd = event

    // console.log(this.GETValueFromDateAdd);
  }
  //GETID FROM URL
  GETIDFROMURL() {
     this._customerIdfromurl='';
    this._customerIdfromurl = this._activatedRoute.snapshot.params['customerId'];
   }
  //Get CUstomer Only
  SearchCustomerBycode(customerId: number) {
     this._CustomersService.GETCustomersByIdAsync(customerId).subscribe(
      (result) => {
        // this.GETCustomerIDSearchText = result;
        localStorage.clear()
         this._customerIdfromurl = result.customerId
        this.GetcustomerNamefromurl = result.customerName
        this.GetcustomerNationalidfromurl=result.customerNationalid
      });

 
 

  }
 
  AddnewLona() {
    for (let index = 0; index <= this.CounterAddNewElement; index++) {
 this.GetvalueFromInputLonaGuarantor = this._AddNewLonaForm.get('iAddLonaInput').value[index]['InputLonaGuarantor'];

      this.errorList = [];
      this._AddNewLonaService.CreateNewLona(this.GetvalueFromInputLonaGuarantor,1)
        .subscribe(
          (result) => {
            if (result.message == 'Added successfully') {
              Swal.fire({
                title: 'تم الحفظ بنجاح !',
                text: 'تم الحفظ بنجاح',
                icon: 'success',
                confirmButtonText: 'success'
              });
              this.router.navigate(['/pages/TrackLona'])

             }
          },
          (error) => {
            if (error.status == 500) {
              // this.toastrservice.info('An error occured while processing this request. Check details or Try again.', '', {
              //   positionClass: 'toast-top-right'
              // });

            }

            if (error.error && error.error.value) {
              this.errorList = [];
              for (let i = 0; i < error.error.value.length; i++) {

                this.errorList.push(error.error.value[i]);

              }
              //            this.showModalError();
            }

          }
        );




    }

  }
  AddnewLonaMaster() {
      this.errorList = [];
      
    this._AddNewLonaService.CreatNewLonaMaster
      (
        this._AddNewLonaForm.get('ProdcutId').value,
        this._customerIdfromurl,

        this.GetIdFromDropdownInterestRate,
        this._AddNewLonaForm.get('InputMonthNumber').value,
        this.GETValueFromDateAdd,
        this._AddNewLonaForm.get('InputAmountLona').value,
        0,
        this.GetvalueFromInputLonaGuarantor,
         this._AddNewLonaForm.get('iAddLonaInput').value,
        this.CounterAddNewElement
      ).subscribe(
        (result) => {
this.AddnewLona();
          // if (result.message == 'Added successfully') {
          //   //this.UpdateQtProductafterPurchases();

          //   Swal.fire({
          //     title: 'success !',
          //     text: 'تم الحفظ بنجاح',
          //     icon: 'success',
          //     confirmButtonText: 'success'
          //   });
          //   //  this.isRegistrationInProcess = false;
          // }
        },
        (error) => {
          if (error.status == 500) {
            // this.toastrservice.info('An error occured while processing this request. Check details or Try again.', '', {
            //   positionClass: 'toast-top-right'
            // });

          }

          if (error.error && error.error.value) {
            this.errorList = [];
            for (let i = 0; i < error.error.value.length; i++) {

              this.errorList.push(error.error.value[i]);

            }
            //            this.showModalError();
          }

        }
      );




    // }

  }


  showModalError() {
    this.modalTitle = 'Error adding  ';
    this.modalMessage = 'Error adding branches';
    $('#errorModal').modal('show'); //  declare let $: any;

  }
  ButtonaddNewItem(): void {
    (<FormArray>this._AddNewLonaForm.get('iAddLonaInput')).push(this.addNewItemInFormGroup());
  }

  Buttonremove(skillGroupIndex: number): void {
    const skillsFormArray = <FormArray>this._AddNewLonaForm.get('iAddLonaInput');
    skillsFormArray.removeAt(skillGroupIndex);
    skillsFormArray.markAsDirty();
    skillsFormArray.markAsTouched();
  }
  CheckInputnumberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  logValidationErrors(group: FormGroup = this._AddNewLonaForm): void {
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
