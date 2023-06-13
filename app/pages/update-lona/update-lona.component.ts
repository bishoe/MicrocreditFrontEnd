import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { IAddLona } from '../Microcredit/Classes/iadd-lona';
import { IProducts } from '../Microcredit/Classes/iproducts';
import { AddNewLonaService } from '../Microcredit/Services/AddNewLona/add-new-lona.service';
import { Observable } from 'rxjs/internal/Observable';
import { SearchproductbyService } from '../Microcredit/Services/Searchproductby/searchproductby.service';
 import { InterestRateService } from '../Microcredit/Services/InterestRate/interest-rate.service';
import { URLPathModule } from '../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { IInterestRate } from '../Microcredit/Classes/iinterest-rate';
import { CustomersService } from '../Microcredit/Services/customers/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MainService } from '../Microcredit/Services/main.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { empty } from 'rxjs';
import { PaymentOfistallmentsService } from '../Microcredit/Services/payment-ofistallments.service';
import { ICustomers } from '../Microcredit/Classes/icustomers';
import { Constants } from '../login/Helper/Constants';
declare let $: any;


@Component({
  selector: 'ngx-update-lona',
  templateUrl: './update-lona.component.html',
  styleUrls: ['./update-lona.component.scss']
})
export class UpdateLonaComponent implements OnInit {
  StartDateLona = new FormControl(new Date())
  date = new FormControl(new Date());

  _AddNewLonaForm: FormGroup;
  _UpdateLonaForm: FormGroup;
  _UpdateIssuanceLona: FormGroup;
  _IAddLona: IAddLona;
  lonaId: number;
  GetvalueFromInputLonaGuarantor: number;
  GetStartDateLonaValue; // use when IssuanceLonaAsync
  GelocalCalcDayOfLonaValue;// use when IssuanceLonaAsync
  GetEndDateLonaValue;// use when IssuanceLonaAsync
  CalcistalmentsAmount; // 
  GetMonthNumber;

  //#region 
  // -------
  LonaId: FormControl;  
  prodcutId: FormControl;
  customerId: FormControl;
  interestRateid: FormControl;
  monthNumber: FormControl;
  amountBeforeAddInterest: FormControl;
  amountAfterAddInterest: FormControl;
  statusLona: FormControl;
  DateAdd: FormControl;
  userID: FormControl;
  lonaDetailsId: FormControl;
  lonaGuarantorId: FormControl;
  NoColumn: FormControl;
  IAddLonaDetailsForm: FormGroup;
  IsDelete: FormControl;
  StatusLonaGuarantor: FormControl;
  // StartDateLona:  FormControl ;
  EndDateLona: FormControl;
  //#endregion
  //#region 
  LonaGuarantor: FormControl;
  InputProdcutId: FormControl;
  InputcustomerNationalid;
  InputcustomerName;
  InputAmountLona: FormControl;
  InputMonthNumber: FormControl;
  InputInterestRateid: FormControl;
  InputIstalmentsNo: FormControl;
  InputAmountBeforeAddInterest: FormControl;
  InputAmountAfterAddInterest: FormControl;
  GetTotalAmount; //use in update method  
  GetDropdownInterestRate;
  TextNameCounter = new FormControl();
  //#region auto complete and search
  prodouctsIDControl = new FormControl('');
  customerIDControl = new FormControl('');
  TextSearchCustomercode = new FormControl();
  DropdownInterestRate: FormControl;
  filteredOptionsProduct: any; //use in autocomplete search 
  filteredOptionsCustomer: any;
  //#endregion
  //#region 
  _localStorageprodouctsID: any; //Save id  use in GetProductIDFromSearchText();
  _localStoragecustomerId: any; // Save id local storg 
  public GetCustomerIDFromSearch// save Id use in GetCustomerIDFromSearchText() ;
  public GetCustomerNameFromSearch// save Id use in GetCustomerIDFromSearchText() ;
  public GetcustomerNationalidFromSearch// save Id use in GetCustomerIDFromSearchText() ;
  _GETALLInterestRate: IInterestRate[] = []; //GETALLInterestRate
  GetIdFromDropdownInterestRate;
  //#endregion
  //#endregion
  LonaEdit: IAddLona;
  //#region 
  //
  public CounterAddNewElement = 1; // use to count row in grid 
  SaveIndexLoop: number;
  CounterreturnElement;
  //
  ////////////////Err
  pageTitle: string;
  errorList: string[];
  modalMessage: string;
  modalTitle: string;
  ////////////////Err
  //#region
  //  AddnewLonaDetails; 

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
  _LonaIdfromurl: any;
  public GetcustomerNamefromurl = '';
  GetGetcustomerNationalidfromurl;
  //#endregion
  ////GetMAxLonaGuarantor
  _GetMAxLonaGuarantor;
  //#region 
  //////////////////
  GetInterestRateName: [] = [];//using in set method
  GetinterestRateId: [] = [];//using in set method
  GetinterestRateIdwhenchange;
  GetInterestRateValue;
  FirstlonaGuarantorId;
  SecondlonaGuarantorId;
  GETCustomerInfo: [];
  //#endregion

  //#endregion
  //#endregion var
  constructor(private fb: FormBuilder, public _AddNewLonaService: AddNewLonaService, private _SearchproductbyService: SearchproductbyService, public _InterestRateService: InterestRateService, private _CustomersService: CustomersService, private _URLPathModule: URLPathModule, private _activatedRoute: ActivatedRoute, private router: Router, private _MainService: MainService, private _PaymentOfistallmentsService: PaymentOfistallmentsService) {

    // this.functions()
    // this.SearchCustomerBycode( this._activatedRoute.snapshot.params['customerId'])

    this.initializAutoComplete();
  }


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
    this._AddNewLonaForm.get('prodcutId').setValue
      (localStorage.getItem("prodouctsID"))
    localStorage.removeItem("prodouctsID");

  }
  filterBYProductName(val: string): Observable<any> {
    return this._SearchproductbyService.getData(this._URLPathModule.ProductsURL)
      .pipe(
        map(response => response.filter(option => {

          localStorage.setItem('LocalstoragegetProductName', JSON.stringify(option));


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
      localStorage.setItem("localstorgecustomerNationalid", this.GetcustomerNationalidFromSearch)

      return icustomers.customerName;
    }

  }
  //Add this id in hidden input  or var
  GetCustomerIDandSetIDINTEXT() {
    for (let index = 0; index <= this.CounterAddNewElement; index++) {
      var IndexLoop = index;
      var indexstring = String(IndexLoop)

      if (this._AddNewLonaForm.get('iAddLonaInput').get(indexstring).get("LonaGuarantor").value == '') this._AddNewLonaForm.get('iAddLonaInput').get(indexstring).get('LonaGuarantor').setValue(localStorage.getItem("localCustomerNameSearchText"))

      this._AddNewLonaForm.get('iAddLonaInput').get(indexstring).get('LonaGuarantor').setValue(localStorage.getItem("localstorgecustomerId"))

    }

    if (this.GetCustomernameFromAutocomplete == null) this.GetCustomernameFromAutocomplete = localStorage.getItem('localstorgecustomername')

    if (this.GetCustomerCodeFromAutocomplete == null) this.GetCustomerCodeFromAutocomplete = localStorage.getItem("localstorgecustomerId")

    if (this.GetNationalidFromAutocomplete == null) this.GetNationalidFromAutocomplete = localStorage.getItem("localstorgecustomerNationalid")

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
      this._GETALLInterestRate = TempGETALLInterestRate as IInterestRate[],

        localStorage.setItem('GETALLInterestRate', JSON.stringify(TempGETALLInterestRate))

    })

  }
  //#endregion 
  getnewValueFromNgSelect(val: any): void {
    localStorage.setItem('localstinterestRateId', JSON.stringify(val.interestRateId))

    this.GetinterestRateIdwhenchange = localStorage.getItem('localstinterestRateId')

    localStorage.setItem('localGetInterestRateValue', JSON.stringify(val.interestRateValue))

    this.GetInterestRateValue = localStorage.getItem('localGetInterestRateValue')
    // }
  }
  ngOnInit(): void {
    //#region 
    // this._AddNewLonaForm= new FormGroup({
    // lonaId:new FormControl(null,[Validators.required]),
    // // LonaGuarantor: new FormControl(null, [Validators.required, ]),
    // InputProdcutId: new FormControl(null, [Validators.required, ]),
    // InputcustomerNationalid: new FormControl(null, [Validators.required, ]),
    //  InputcustomerName: new FormControl(null, [Validators.required, ]),
    // InputMonthNumber: new FormControl(null, [Validators.required, ]),
    // InputInterestRateid: new FormControl(null, [Validators.required, ]),
    // FirstlonaGuarantorId:new FormControl(null),
    // InputIstalmentsNo: new FormControl(null, [Validators.required, ]),
    // InputAmountBeforeAddInterest: new FormControl(null, [Validators.required, ]),
    // InputAmountAfterAddInterest: new FormControl(null, [Validators.required, ]),
    // DropdownInterestRate:new FormControl(null,[Validators.required]),
    // DateAdd:new FormControl(null,[Validators.required]),

    // })
    //#endregion
    let   Getrole=localStorage.getItem(Constants.USER_KEY)

    if(Getrole.indexOf('Admin')>-1){
    this.IAddLonaDetailsForm = this.fb.group({
      LonaId: new FormControl(),
      lonaDetailsId: new FormControl(),
      lonaGuarantorId: new FormControl(),
      NoColumn: new FormControl(),
      IsDelete: new FormControl(),
      StatusLonaGuarantor: new FormControl(),

    })

    this._AddNewLonaForm = this.fb.group({

      // ProdcutId: localStorage.getItem('prodouctsID'),
      // LonaId:new FormControl(),
      prodcutId: new FormControl(),
      DateAdd: new FormControl(),

      customerId: new FormControl(),
      interestRateid: new FormControl(),
      monthNumber: new FormControl(),
      amountBeforeAddInterest: new FormControl(),
      amountAfterAddInterest: new FormControl(),
      statusLona: new FormControl(),
      userID: new FormControl(),
      LonaId: new FormControl(),
      // lonaDetailsId:new FormControl(),
      // lonaGuarantorId:new FormControl(),
      // NoColumn:new FormControl(),
      iAddLonaInput: this.fb.array([
        this.addNewItemInFormGroup()
      ]),

    })
    this._UpdateIssuanceLona = this.fb.group({
      StartDateLona: new FormControl(new Date().toLocaleDateString()),
      EndDateLona: new FormControl(),
      statusLona: new FormControl(),
      amountAfterAddInterest: new FormControl(),
    })
    this.GETIDFROMURL();
    // this.SETdataTOFORMCONTROL();
    this.ButtonaddNewItem()

    this.GetInterestRateName = JSON.parse(localStorage.getItem('localGetInterestRateName'))
    this.GetinterestRateIdwhenchange = JSON.parse(localStorage.getItem('localstorgeinterestRateId'))


     this.GETALLInterestRate()
    }else if(Getrole.indexOf('user')){  
    alert('Access denied');
    this.router.navigate(["/login"]);
    return;
  }
}
  //#region GETID FROM URL
  GETIDFROMURL() {
    //GET ID FROM URL Pagging
    this._LonaIdfromurl = this._activatedRoute.snapshot.params['lonaId'];
    //TODO
    this._MainService.GETByIdAsync(this._LonaIdfromurl, this._URLPathModule.TrackLonaByidURL).subscribe(data => {
      this.LonaEdit = data;
    // console.log(data)
      localStorage.setItem('GetLengthInputAmountLona', data.length)
    })
  }
  //#endregion

  //#region set selection data in matautocomplete
  /////////
  @ViewChild(MatAutocompleteTrigger)
  _auto: MatAutocompleteTrigger;

  activeOptions = localStorage.getItem('LocalstoragegetProductName')
  /////////
  //#endregion 
  SETdataTOFORMCONTROL() {
    this._GETALLInterestRate = JSON.parse(localStorage.getItem('GETALLInterestRate'))
    // console.log(this._GETALLInterestRate)
    //#region GET GuarantorId  

    this._MainService.GETByIdAsync(this._LonaIdfromurl, this._URLPathModule.trackLonaWithGuarantorIdUrl).
      subscribe(_GETLengthResulttrackLonaWithGuarantorId => {

        this.CounterreturnElement = _GETLengthResulttrackLonaWithGuarantorId.length

        let options = this._auto.autocomplete.options.toArray()

        this.prodouctsIDControl.setValue(_GETLengthResulttrackLonaWithGuarantorId[0])

        //#endregion GET Guarantor Name base id 
        //#region interestRateName
        // this._MainService.GETByIdAsync(this._LonaIdfromurl)
        this._MainService.GETByIdAsync(_GETLengthResulttrackLonaWithGuarantorId[0].interestRateid, this._URLPathModule.InterestRate).
          subscribe(datainterestRate => {

            this.GetInterestRateName = datainterestRate.interestRateName
            this.GetinterestRateIdwhenchange = datainterestRate.interestRateId
            localStorage.setItem('localGetInterestRateName', JSON.stringify(this.GetInterestRateName))

            localStorage.setItem('localstorgeinterestRateId', JSON.stringify(this.GetinterestRateIdwhenchange))

            this.GetInterestRateName = JSON.parse(localStorage.getItem('localGetInterestRateName'))

            this.GetinterestRateIdwhenchange = JSON.parse(localStorage.getItem('localstorgeinterestRateId'))
            this.InputcustomerNationalid =_GETLengthResulttrackLonaWithGuarantorId[0].customerNationalid
            this.InputcustomerName =_GETLengthResulttrackLonaWithGuarantorId[0].customerName
          });
      
    this.customerId = this.LonaEdit[0].customerId
    });   
     console.log(this.LonaEdit)

    this.InputcustomerNationalid = this.LonaEdit[0].customerNationalid
    this.GetDropdownInterestRate = this.LonaEdit[0].interestRateid,
      //#endregion  
      this._MainService.GETByIdAsync(this.GetDropdownInterestRate,
        this._URLPathModule.InterestRate).subscribe(
          GetInterestRate => {
            this.GetInterestRateName = GetInterestRate.interestRateName
            this.GetInterestRateValue = GetInterestRate.interestRateValue
          })
    let getlength = Number(localStorage.getItem('GetLengthInputAmountLona'))
    for (let index = 0; index <= getlength; index++) {
      this._AddNewLonaForm.patchValue
        ({
          // LonaId:this.LonaEdit[index].lonaId,
          customerId: this.LonaEdit[index].customerId,
          interestRateid: this.LonaEdit[index].interestRateid,
          monthNumber: this.LonaEdit[index].monthNumber,
          prodcutId: this.LonaEdit[index].prodcutId,
          amountBeforeAddInterest: this.LonaEdit[index].amountBeforeAddInterest,
          amountAfterAddInterest: this.LonaEdit[index].amountAfterAddInterest,
          statusLona: this.LonaEdit[index].statusLona,
           NoColumn: localStorage.getItem('GetLengthInputAmountLona'),
          DateAdd: this.LonaEdit[index].dateAdd,
          userID: this.LonaEdit[index].userID,
          LonaId: this.LonaEdit[0].lonaId,
        });
      this.IAddLonaDetailsForm.patchValue({
        lonaDetailsId: this.LonaEdit[index].lonaDetailsId,
        lonaGuarantorId: this.LonaEdit[index].lonaGuarantorId,
        // lonaDetailsId:this.LonaEdit[0].lonaGuarantorId,
        NoColumn: localStorage.getItem('GetLengthInputAmountLona'),
        IsDelete: false,
        StatusLonaGuarantor: false,
        LonaId: this.LonaEdit[0].lonaId,
      })
      this.LoadTextInput()
    }
  }
  LoadTextInput() {


    for (let index = 0; index <= 0; index++) {
      var Stringindex = String(index)
      // console.log(this.LonaEdit[Stringindex].lonaGuarantorId)

      this._MainService.GETByIdAsync(this.LonaEdit[Stringindex].lonaGuarantorId, this._URLPathModule.CustomersURL).subscribe
        (_GETCustomerInfo => {

          this.GETCustomerInfo = _GETCustomerInfo

          //  if (this._AddNewLonaForm.get('iAddLonaInput').get(Stringindex).get('LonaGuarantor').value == '' ) this._AddNewLonaForm.get('iAddLonaInput').get(Stringindex).get('LonaGuarantor').setValue(_GETCustomerInfo['customerId'])

          if (this._AddNewLonaForm.get('iAddLonaInput').get('0').get('LonaGuarantor').value == '') this._AddNewLonaForm.get('iAddLonaInput').get('0').get('LonaGuarantor').setValue(_GETCustomerInfo['customerId'])

          //  if (this._AddNewLonaForm.get('iAddLonaInput').get('1').get('LonaGuarantor').value == '' ) this._AddNewLonaForm.get('iAddLonaInput').get('1').get('LonaGuarantor').setValue(_GETCustomerInfo['customerId'])

          // console.log(this.GETCustomerInfo['customerId'])
          // console.log(Stringindex)

          if (this._AddNewLonaForm.get('iAddLonaInput').get(Stringindex).get("InputcustomerName").value == '') this._AddNewLonaForm.get('iAddLonaInput').get(Stringindex).get('InputcustomerName').setValue(this.GETCustomerInfo['customerName'])

          if (this._AddNewLonaForm.get('iAddLonaInput').get(Stringindex).get("InputcustomerNationalid").value == '')

            this._AddNewLonaForm.get('iAddLonaInput').get(Stringindex).get('InputcustomerNationalid').setValue(this.GETCustomerInfo['customerNationalid'])

        })

      //  index++


    }

    this._MainService.GETByIdAsync(this.LonaEdit[1].lonaGuarantorId, this._URLPathModule.CustomersURL).subscribe
      (_GETCustomerInfo_ => {

        this.GETCustomerInfo = _GETCustomerInfo_

        //  if (this._AddNewLonaForm.get('iAddLonaInput').get(Stringindex).get('LonaGuarantor').value == '' ) this._AddNewLonaForm.get('iAddLonaInput').get(Stringindex).get('LonaGuarantor').setValue(_GETCustomerInfo['customerId'])

        //  if (this._AddNewLonaForm.get('iAddLonaInput').get('0').get('LonaGuarantor').value == '' ) this._AddNewLonaForm.get('iAddLonaInput').get('0').get('LonaGuarantor').setValue(_GETCustomerInfo['customerId'])

        if (this._AddNewLonaForm.get('iAddLonaInput').get('1').get('LonaGuarantor').value == '') this._AddNewLonaForm.get('iAddLonaInput').get('1').get('LonaGuarantor').setValue(_GETCustomerInfo_['customerId'])
        if (this._AddNewLonaForm.get('iAddLonaInput').get('1').get("InputcustomerName").value == '') this._AddNewLonaForm.get('iAddLonaInput').get('1').get('InputcustomerName').setValue(_GETCustomerInfo_['customerName'])
        if (this._AddNewLonaForm.get('iAddLonaInput').get('1').get("InputcustomerNationalid").value == '')
        this._AddNewLonaForm.get('iAddLonaInput').get('1').get('InputcustomerNationalid').setValue(_GETCustomerInfo_['customerNationalid'])
      })
  }
  addNewItemInFormGroup(): FormGroup {
    return this.fb.group({
      LonaGuarantor: ['', Validators.required],
      InputcustomerName: ['', Validators.required],
      InputcustomerNationalid: [''],
      InputcustomerName1: ['', Validators.required],
      InputcustomerNationalid1: ['']
    });
  }

  CounterAddNewElementFunc() {
    this.CounterAddNewElement++;
  }

  _GETValueFromStartDateLona(event) {

    this.GETValueFromStartDateLona = event

    console.log(this.GETValueFromStartDateLona);
  }

  _GETValueFromEndDateLona(event) {

    this.GETValueFromEndDateLona = event

    console.log(this.GETValueFromEndDateLona);
  }

  _GETValueFromDateAdd(event) {

    this.GETValueFromDateAdd = event

    console.log(this.GETValueFromDateAdd);
  }

  //Get CUstomer Only
  SearchCustomerBycode(customerId: number) {
    //  localStorage.removeItem('localCustomerNameSearchText')
    this._CustomersService.GETCustomersByIdAsync(customerId).subscribe(
      (result) => {
        // this.GETCustomerIDSearchText = result;
        localStorage.setItem("localCustomerNameSearchText", result.customerName)
        localStorage.setItem("localCustomerNationalidSearchText", result.customerNationalid)
        localStorage.setItem("localCustomeridSearchText", result.customerId)
      });

    this.GetcustomerNamefromurl = localStorage.getItem('localCustomerNameSearchText')
    this.GetGetcustomerNationalidfromurl = localStorage.getItem('localCustomerNationalidSearchText')
    // this._customerIdfromurl = localStorage.getItem('localCustomeridSearchText')



  }

  UpdateMasterLona() {
    this._AddNewLonaForm.get('interestRateid').setValue(this.GetinterestRateIdwhenchange)
    let _AddNewLonaForm = this._AddNewLonaForm.value;
    // console.log('update',this._AddNewLonaForm.value)
    this.errorList = [];
    this._AddNewLonaService.UpdateMasterLonaAsync(this._LonaIdfromurl, _AddNewLonaForm).subscribe(response => {
      this.UpdateLona();
      Swal.fire({
        title: 'تم !',
        text: 'الحفظ بنجاح',
        icon: 'success',
        confirmButtonText: 'موافق'
      });
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
      });
  }
  UpdateLona() {

    for (let index = 0; index <= 2; index++) {
      let indexstring = String(index)
      this.GetvalueFromInputLonaGuarantor = this._AddNewLonaForm.get('iAddLonaInput').value[index]['LonaGuarantor']
      let _AddNewLonaForm = this.LonaEdit[index];

      let GetlonaDetailsId = _AddNewLonaForm.lonaDetailsId
      let GetlonaId = _AddNewLonaForm.lonaId
      this.errorList = [];
      this._AddNewLonaService.UpdateNewLona_(this.GetvalueFromInputLonaGuarantor, GetlonaId, GetlonaDetailsId, 2).subscribe(response => {
        Swal.fire({
          title: 'تم !',
          text: 'الحفظ بنجاح',
          icon: 'success',
          confirmButtonText: 'موافق'
        });
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
        });
    }
  }
  CalcDayOfLona() {
    let GetmonthNumber = this._AddNewLonaForm.get('monthNumber').value

    let CalcDayes = GetmonthNumber * 30 ////day = 30

    const addDays = (date: Date, days: number): Date => {
      let result = new Date(date.toLocaleDateString());

      result.setDate(result.getDate() + days);
      return result;
    };

    const date: Date = new Date(new Date().toLocaleDateString());
    const result: Date = addDays(date, CalcDayes);
    localStorage.removeItem('localCalcDayOfLona')

    localStorage.setItem('localCalcDayOfLona', result.toLocaleDateString())

    // console.log(localStorage.getItem('localCalcDayOfLona')); // 2022-03-17T23:59:5

  }
  IssuanceLona() {
    this.CalcDayOfLona()
    var getAmountLona = this._AddNewLonaForm.get('amountBeforeAddInterest').value

    var GetMonthNumber = this._AddNewLonaForm.get('monthNumber').value

    var Maincalc = getAmountLona * this.GetInterestRateValue / 100 * GetMonthNumber
    var GetAmountAfteraddinters = Maincalc / GetMonthNumber

    this.GetTotalAmount = GetAmountAfteraddinters + getAmountLona
    localStorage.setItem('localGetTotalAmount', this.GetTotalAmount)

    //  console.log('GetTotalAmount',this.GetTotalAmount)

    this._UpdateIssuanceLona.get('amountAfterAddInterest').setValue(this.GetTotalAmount)

    this.GetStartDateLonaValue = this._UpdateIssuanceLona.get('StartDateLona').value

    this.GelocalCalcDayOfLonaValue = localStorage.getItem('localCalcDayOfLona')

    this.GetEndDateLonaValue = new Date(this.GelocalCalcDayOfLonaValue)


    let GetlonaId = this.LonaEdit[0].lonaId;
    //  let GetlonaId = _AddNewLonaForm.lonaId
    this.errorList = [];

    this._AddNewLonaService.IssuanceLonaAsync(
      // GetlonaId,1,this.GetTotalAmount,GetStartDateLonaValue,new  Date(GetEndDateLonaValue)
      GetlonaId, 1, this.GetTotalAmount, new Date(this.GetStartDateLonaValue), new Date(this.GetEndDateLonaValue)
    ).subscribe(response => {

      Swal.fire({
        text: 'تم اصدار القرض بنجاح',
        icon: 'success',
        confirmButtonText: 'موافق'
      });
      this.AddPaymentOfistallments();
      //  this.router.navigate(['/pages/TrackLona'])

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
      });
  }


  AddPaymentOfistallments() {
    this.GetStartDateLonaValue = this._UpdateIssuanceLona.get('StartDateLona').value

    let GetMonthNumber = this._AddNewLonaForm.get('monthNumber').value

    var GetvaluelocalGetTotalAmount = Number(localStorage.getItem('localGetTotalAmount'))

    let CalcistalmentsAmount = GetvaluelocalGetTotalAmount / GetMonthNumber
    // console.log(this._AddNewLonaForm.get('prodcutId').value)

    let GetProductid = this._AddNewLonaForm.get('prodcutId').value
    Math.round(CalcistalmentsAmount)
    let GetcustomerId = this.LonaEdit[0].customerId
    // console.log(this._UpdateIssuanceLona.get('StartDateLona').value)
    this._PaymentOfistallmentsService.CreateNewPaymentOfistallments
      (
         GetcustomerId,
        GetvaluelocalGetTotalAmount,
        new Date(),
        false, '1',
        this._LonaIdfromurl,
        GetProductid, GetMonthNumber,0,0,0,0,new Date(),
      ).subscribe(
        (result) => {
          if (result.message == 'Added successfully') {
            //this.UpdateQtProductafterPurchases();
            this.AddPaymentOfistallmentsDeatis()
            Swal.fire({
              // title: 'تم الحفظ بنجاح !',
              text: 'تم الحفظ بنجاح',
              icon: 'success',
              confirmButtonText: 'success'
            });
            this.router.navigate(['/pages/TrackLona'])

            //  this.isRegistrationInProcess = false;
          }
        },
        (error) => {
          if (error.status == 500) {
            // this.toastrservice.info('An error occured while processing this request. Check details or Try again.', '', {
            //   positionClass: 'toast-top-right'
            // });

          }
          //
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
  //#endregion end check Err
 

  Test(){
    for (let index = 0; index < 12; index++) {
      function addMonths(date, months) {
      date.setMonth(date.getMonth() + months);
    
      return date;
    }
    
     const date = new Date();
 
    const result = addMonths(date, index);
    console.log(result); //   

  }
}
  //#region 
  AddPaymentOfistallmentsDeatis() {
    this.GetMonthNumber = this._AddNewLonaForm.get('monthNumber').value
   
 
    for (let index = 0; index < this.GetMonthNumber; index++) {


      function addMonths(date, months) {
        date.setMonth(date.getMonth() + months);
      
        return date;
      }
      
      // ✅ Add 13 months to a date
      const date = new Date();
      
      const result = addMonths(date, index);
      console.log(result); // 

      var GetvaluelocalGetTotalAmount = Number(localStorage.getItem('localGetTotalAmount'))
       
      this.CalcistalmentsAmount = GetvaluelocalGetTotalAmount / this.GetMonthNumber
      this._PaymentOfistallmentsService.CreateNewPaymentOfistallmentsDetalis
        (
          Math.round(this.CalcistalmentsAmount), 0, 0, this.GetMonthNumber, Math.min(index+1),0,

          result 
        ).subscribe(
          (result) => {
            if (result.message == 'Added successfully') {
              //this.UpdateQtProductafterPurchases();
              // this.AddPaymentOfistallmentsDeatis()
              // Swal.fire({
              //   title: 'تم الحفظ بنجاح !',
              //   text: 'تم الحفظ بنجاح',
              //   icon: 'success',
              //   confirmButtonText: 'success'
              // });
              this.router.navigate(['/pages/TrackLona'])

              //  this.isRegistrationInProcess = false;
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
            }

          }
        );

      }
  }
  //#endregion
  showModalError() {
    this.modalTitle = 'Error adding  ';
    this.modalMessage = 'Error adding branches';
    $('#errorModal').modal('show'); //  declare let $: any;

  }
  ButtonaddNewItem(): void {
    (<FormArray>this._AddNewLonaForm.get('iAddLonaInput')).push(this.addNewItemInFormGroup());
  }
  get skillArr() {
    return this._AddNewLonaForm.get('iAddLonaInput') as FormArray
  }
  Buttonremove(skillGroupIndex: number): void {
    const skillsFormArray = <FormArray>this._AddNewLonaForm.get('iAddLonaInput');
    skillsFormArray.removeAt(skillGroupIndex);
    skillsFormArray.markAsDirty();
    skillsFormArray.markAsTouched();
  }



}
