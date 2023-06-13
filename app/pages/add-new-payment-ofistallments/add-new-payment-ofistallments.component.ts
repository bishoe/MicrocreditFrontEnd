import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { IAddLona } from '../Microcredit/Classes/iadd-lona';
 import { URLPathModule } from '../Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { MainService } from '../Microcredit/Services/main.service';
import { PaymentOfistallmentsService } from '../Microcredit/Services/payment-ofistallments.service';
import { IPaymentOfistallmentsDetails } from '../Microcredit/Classes/ipayment-ofistallments';
import { Observable } from 'rxjs-compat';
import { info, time } from 'console';
import { timer } from 'rxjs';
import { ICustomers } from '../Microcredit/Classes/icustomers';
declare let $: any;

@Component({
  selector: 'ngx-add-new-payment-ofistallments',
  templateUrl: './add-new-payment-ofistallments.component.html',
  styleUrls: ['./add-new-payment-ofistallments.component.scss']
})
export class AddNewPaymentOfistallmentsComponent implements OnInit {

  constructor(private _URLPathModule: URLPathModule, private _activatedRoute: ActivatedRoute, private router: Router, private _MainService: MainService, private fb: FormBuilder, private _PaymentOfistallmentsService: PaymentOfistallmentsService) { }

  _AddNewPaymentOfistallments: FormGroup;
  _DetailsLona: FormGroup;
  amountPaidcontrol: FormControl;
  PaymentId;
  CustomerId;
  IstalmentsAmount: FormControl;
  AmountPaid: FormControl;
  AmountRemaining: FormControl;
  LonaAmount: FormControl;
  DateAdd: FormControl;
  UserId: FormControl;
  DiscountPercentagecontol: FormControl;

  GetstartDateLona;
  //
  _LonaIdfromurl: any;
  GetPaymentOfistallments: IAddLona[];
  GetDetialsLonawithID: IAddLona;
  GetInterestRateName: [] = [];//using in set method
  GetinterestRateId: [] = [];//using in set method
  GetinterestRateIdwhenchange;
  GetInterestRateValue;
  FirstlonaGuarantorId;
  SecondlonaGuarantorId;
  GETCustomerInfo: ICustomers[];
  CounterreturnElement;
  //
  ////////////////Err
  pageTitle: string;
  errorList: string[];
  modalMessage: string;
  modalTitle: string;
  customerId: FormControl;
  interestRateid: FormControl;
  inputpaymentIdDetails: FormControl;
  customerNationalid;
  customerName;
  prodouctName;
  GetDropdownInterestRate;
  lonaAmount;
  monthNumber;
  p: number = 1;
  PaymentOfistallmentsPagging: any[] = [];
  showCalculateremainingamount;  // GetCalculateremainingamount()
  ValueCalculateremainingamount; //GetCalculateremainingamount()
  TotalAmountRequier;  //ExpeditedPayment()
  GetDiscountPercentagecontol; //ExpeditedPayment()
  noIstalments;
  GetFirstpaymentIdDetails;
  //
  ngOnInit(): void {
    this._DetailsLona = this.fb.group({
      inputpaymentIdDetails: this.inputpaymentIdDetails,
      // ProdcutId: localStorage.getItem('prodouctsID'),
      // LonaId:new FormControl(),
      // prodcutId:new FormControl(),  
      // DateAdd:new FormControl(),
      // customerId:new FormControl(),
      // interestRateid:new FormControl(),
      // monthNumber:new FormControl(),
      // // amountBeforeAddInterest:new FormControl(),
      // amountAfterAddInterest:new FormControl(),
      // statusLona:new FormControl(),
      // userID:new FormControl(),
      // LonaId:new FormControl(),
      amountPaidcontrol: this.amountPaidcontrol,
      DiscountPercentagecontol:this.DiscountPercentagecontol,
      iAddLonaInput: this.fb.array([
        // this.addNewItemInFormGroup()
      ]),

    })
    this.GETIDFROMURL();
    this.GetinfoPayment();
  }
  GETIDFROMURL() {
    //GET ID FROM URL Pagging
    this._LonaIdfromurl = this._activatedRoute.snapshot.params['paymentId'];
    //TODO
    //  GetPaymentOfistallments
    this._MainService.GETByIdAsync(this._LonaIdfromurl, this._URLPathModule.TrackLonaByidPaymentOfistallmentsURL).subscribe(data => {
      this.GetPaymentOfistallments = data as [];
localStorage.setItem("LocalStoragelonaId",data[0].lonaId)
      //GetDetialsLonawithIDAsync
      this._MainService.GETByIdAsync(data[0].lonaId, this._URLPathModule.GetDetialsLonawithIDAsyncUrl).subscribe(data => {
        this.GetDetialsLonawithID = data;
        localStorage.setItem('GetLengthInputAmountLona', data)
        //  console.log(   this.GetDetialsLonawithID)
        this.GetstartDateLona = this.GetDetialsLonawithID[0].startDateLona
        //#region GET GuarantorId  
        this._MainService.GETByIdAsync(this._LonaIdfromurl, this._URLPathModule.trackLonaWithGuarantorIdUrl).

          subscribe(_GETLengthResulttrackLonaWithGuarantorId => {
            this.CounterreturnElement = _GETLengthResulttrackLonaWithGuarantorId.length


            //#endregion GET Guarantor Name base id 

            //#region interestRateName

            this._MainService.GETByIdAsync(_GETLengthResulttrackLonaWithGuarantorId[0].interestRateid, this._URLPathModule.InterestRate).
              subscribe(datainterestRate => {
                this.GetInterestRateName = datainterestRate.interestRateName
                this.GetinterestRateIdwhenchange = datainterestRate.interestRateId
                localStorage.setItem('localGetInterestRateName', JSON.stringify(this.GetInterestRateName))
                localStorage.setItem('localstorgeinterestRateId', JSON.stringify(this.GetinterestRateIdwhenchange))
                this.GetInterestRateName = JSON.parse(localStorage.getItem('localGetInterestRateName'))
                this.GetinterestRateIdwhenchange = JSON.parse(localStorage.getItem('localstorgeinterestRateId'))
              })
          });
        //    console.log(this.LonaEdit)
        // this.InputcustomerName = this.LonaEdit[0].customerName,
        // console.log(data)
        // console.log(this.GetDetialsLonawithID[0].prodcutId)
        // Get Product Name
        this._MainService.GETByIdAsync(this.GetDetialsLonawithID[0].prodcutId, this._URLPathModule.ProductsURL).subscribe
          (_GETProductInfo => {

            this.prodouctName = _GETProductInfo as []
            this.prodouctName = _GETProductInfo['prodouctName']
          })


        //#region 

        this._MainService.GETByIdAsync(this._LonaIdfromurl,
          this._URLPathModule.GetPaymentOfistallmentsByIdUrl).subscribe(
            PaymentOfistallments => {
              this.lonaAmount = PaymentOfistallments[0].lonaAmount
              this.monthNumber = PaymentOfistallments[0].monthNumber
              localStorage.setItem('locallonaAmount', this.lonaAmount)
              localStorage.setItem('localmonthNumber', this.monthNumber)
              this.lonaAmount = localStorage.getItem('locallonaAmount')
              this.monthNumber = localStorage.getItem('localmonthNumber')
            })
        //  console.log(localStorage.getItem('locallonaAmount'))

        //#endregion
        this.customerId = this.GetDetialsLonawithID[0].customerId

        this.GetDropdownInterestRate = this.GetDetialsLonawithID[0].interestRateid,
          //#endregion  
          this._MainService.GETByIdAsync(this.GetDropdownInterestRate,
            this._URLPathModule.InterestRate).subscribe(
              GetInterestRate => {
                this.GetInterestRateName = GetInterestRate.interestRateName
                this.GetInterestRateValue = GetInterestRate.interestRateValue
              })
        this._MainService.GETByIdAsync(this.GetDetialsLonawithID[0].customerId, this._URLPathModule.CustomersURL).subscribe
          (_GETCustomerInfo => {

            this.GETCustomerInfo = _GETCustomerInfo as []
            this.customerName = this.GETCustomerInfo['customerName']
            this.customerNationalid = this.GETCustomerInfo['customerNationalid']
            //  console.log(this.GETCustomerInfo['customerName'])
          })
      })
    })
    let getlength = Number(localStorage.getItem('GetLengthInputAmountLona'))
    for (let index = 0; index <= getlength; index++) {
      this._DetailsLona.patchValue
        ({
          customerId: this.GetDetialsLonawithID[index].customerId,
          monthNumber: this.GetDetialsLonawithID[index].monthNumber,
          prodcutId: this.GetDetialsLonawithID[index].prodcutId,
          amountAfterAddInterest: this.GetDetialsLonawithID[index].amountAfterAddInterest,
          statusLona: this.GetDetialsLonawithID[index].statusLona,
          NoColumn: localStorage.getItem('GetLengthInputAmountLona'),
          DateAdd: this.GetDetialsLonawithID[index].dateAdd,
          userID: this.GetDetialsLonawithID[index].userID,
          LonaId: this.GetDetialsLonawithID[0].lonaId,
        });
      console.log(this._DetailsLona.value)


    }



  }
  GetinfoPayment() {
    this._LonaIdfromurl = this._activatedRoute.snapshot.params['paymentId'];

    this._MainService.GETByIdAsync(this._LonaIdfromurl,
      this._URLPathModule.GetPaymentOfistallmentsByIdUrl).subscribe(
        PaymentOfistallments => {
          this.PaymentOfistallmentsPagging = PaymentOfistallments
          console.log(this.PaymentOfistallmentsPagging)

          
          this.GetFirstpaymentIdDetails = this.PaymentOfistallmentsPagging[0]['paymentIdDetails']
          for (let index = 0; index < this.PaymentOfistallmentsPagging.length; index++) {
            this._DetailsLona.get('amountPaidcontrol').setValue(this.PaymentOfistallmentsPagging[0].istalmentsAmount)
            this._DetailsLona.get('inputpaymentIdDetails').setValue(this.PaymentOfistallmentsPagging[0].paymentIdDetails)
          }
          // localStorage.setItem('localPaymentOfistallments',JSON.stringify)
        })


  }

  GetCalculateremainingamount() {
    var LocalStoragelonaId = Number (localStorage.getItem("LocalStoragelonaId"));
    this._MainService.GETByIdAsync(LocalStoragelonaId,
      this._URLPathModule.GetCalculateremainingamountUrl).subscribe(
     
        Calculateremainingamount => {

          this.showCalculateremainingamount = Calculateremainingamount[0].istalmentsAmount

          this.ValueCalculateremainingamount = Calculateremainingamount[0].istalmentsAmount

 
           
           
        })


  }

// هنا هعمل الفانكشين اللى هتاخد المبلغ الاجمالى ثم هقوم بعمليه الخصم ثم هبعتها للباك اند عشان تقفل القرض ويسدد


// this.ValueCalculateremainingamount


  Search() {
    if (this.noIstalments == '') {
      this.ngOnInit();

    } else {
      this.PaymentOfistallmentsPagging = this.PaymentOfistallmentsPagging.filter(res => {
        return res.noIstalments.toLocaleLowerCase().match(this.noIstalments.toLocaleLowerCase());
      })
    }
  }

  key: string = 'noIstalments';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  UpdateLona() {
    //#region Get Value
    let GetamountPaidcontrol = this._DetailsLona.get('amountPaidcontrol').value
    let SetAmountRemaining;
    let SetStatusIstalments;
    let CalcTotalAmount;
    let GetpaymentId = this.PaymentOfistallmentsPagging[0]['paymentId']
    let GetistalmentsAmount = this.PaymentOfistallmentsPagging[0]['istalmentsAmount']
    let GetmonthNumber = this.PaymentOfistallmentsPagging[0]['monthNumber']
    let GetnoIstalments = this.PaymentOfistallmentsPagging[0]['noIstalments']
    let GetamountamountPaid = this.PaymentOfistallmentsPagging[0]['amountPaid']

    let GetamountRemaining = this.PaymentOfistallmentsPagging[0]['amountRemaining']
    this.errorList = [];
    //#endregion
  if (GetistalmentsAmount == GetamountPaidcontrol)

  SetAmountRemaining = 0, SetStatusIstalments = 1;

  if (GetamountPaidcontrol < GetistalmentsAmount)

   SetAmountRemaining = GetistalmentsAmount - GetamountamountPaid ; SetStatusIstalments = 2;
    
    CalcTotalAmount = GetamountPaidcontrol + GetamountamountPaid;

    if (CalcTotalAmount < GetistalmentsAmount) {
     let CalcRem = GetistalmentsAmount - GetamountamountPaid 
      SetAmountRemaining = CalcRem - GetamountPaidcontrol;
       SetStatusIstalments = 2;

      this._PaymentOfistallmentsService.UpdatePayMonthAmount(
        this.GetFirstpaymentIdDetails,
        GetpaymentId,
        GetistalmentsAmount,
        CalcTotalAmount,
        SetAmountRemaining,
        GetnoIstalments,
        GetmonthNumber,
        new Date(),
        SetStatusIstalments,
      ).subscribe(response => {
        Swal.fire({
          title: 'تم !',
          text: 'الحفظ بنجاح',
          icon: 'success',
          confirmButtonText: 'موافق'
        });
        this.PaymentOfistallmentsPagging = null;
        window.location.reload()
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

    else if (CalcTotalAmount == GetistalmentsAmount) {
      SetAmountRemaining=0
      SetStatusIstalments=1
      this._PaymentOfistallmentsService.UpdatePayMonthAmount(
        this.GetFirstpaymentIdDetails,
        GetpaymentId,
        GetistalmentsAmount,
        CalcTotalAmount,
        SetAmountRemaining,
        GetnoIstalments,
        GetmonthNumber,
        new Date(),
        SetStatusIstalments,
      ).subscribe(response => {
        Swal.fire({
          title: 'تم !',
          text: 'الحفظ بنجاح',
          icon: 'success',
          confirmButtonText: 'موافق'
        });
        this.PaymentOfistallmentsPagging = null;
        window.location.reload()
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
  DeleteLonaPaymentOfistallments(){
    let GetpaymentId = this.PaymentOfistallmentsPagging[0]['paymentId']

    this._PaymentOfistallmentsService.DeleteLonaPaymentOfistallments(GetpaymentId, 0,0,new Date(),true,"0",0,0,0
     ).subscribe(response => {
     Swal.fire({
       title: 'تم !',
       text: 'الحفظ بنجاح',
       icon: 'success',
       confirmButtonText: 'موافق'
     });
     this.PaymentOfistallmentsPagging = null;
    //  window.location.reload()
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
  DeleteLona() {
    //#region Get Value
    let GetamountPaidcontrol = this._DetailsLona.get('amountPaidcontrol').value
    let SetAmountRemaining;
    let SetStatusIstalments;
    let CalcTotalAmount;
    let GetistalmentsAmount = this.PaymentOfistallmentsPagging[0]['istalmentsAmount']
    let GetmonthNumber        = this.PaymentOfistallmentsPagging[0]['monthNumber']
    let GetnoIstalments      = this.PaymentOfistallmentsPagging[0]['noIstalments']
          let GetpaymentId   =  this.PaymentOfistallmentsPagging[0]['paymentId']

     this.errorList = [];
    //#endregion
 
  for (let index = 0; index < GetmonthNumber; index++) {

 SetStatusIstalments = 4;

 this._MainService.GETByIdAsync(this._LonaIdfromurl,
  this._URLPathModule.GetPaymentOfistallmentsByIdUrl).subscribe(
    PaymentOfistallments => {
      this.PaymentOfistallmentsPagging = PaymentOfistallments
       this.GetFirstpaymentIdDetails = this.PaymentOfistallmentsPagging[index]['paymentIdDetails']
       this._PaymentOfistallmentsService.DeleteLona(this.GetFirstpaymentIdDetails,
         GetpaymentId,0,0,0,0,GetmonthNumber,new Date(),SetStatusIstalments
        ).subscribe(response => {
          this.DeleteLonaPaymentOfistallments();
          this._DeleteLonaPaymentOfistallments();
        Swal.fire({
          title: 'تم !',
          text: 'الحفظ بنجاح',
          icon: 'success',
          confirmButtonText: 'موافق'
        });
        this.PaymentOfistallmentsPagging = null;
        window.location.reload()
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
      })

     
  }
  }

  _DeleteLonaPaymentOfistallments(){
    let GetpaymentId = this.PaymentOfistallmentsPagging[0]['paymentId']
console.log(GetpaymentId)
     this._MainService.UpdateWithIdAsync(  this.PaymentOfistallmentsPagging[0]['lonaId']
     ,this._URLPathModule.ChangeStatusMasterLona).subscribe(response => {
      this._DeleteLonaPaymentOfistallments()
     Swal.fire({
       title: 'تم !',
       text: 'الحفظ بنجاح',
       icon: 'success',
       confirmButtonText: 'موافق'
     });
     this.PaymentOfistallmentsPagging = null;
    //  window.location.reload()
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




  ExpeditedPayment(){

    this.GetDiscountPercentagecontol = this._DetailsLona.get('DiscountPercentagecontol').value
  
    console.log(this.ValueCalculateremainingamount)
    var calcAmountDiscountPercentage =  this.ValueCalculateremainingamount * this.GetDiscountPercentagecontol / 100
  
  console.log(calcAmountDiscountPercentage)
  
    this.TotalAmountRequier =    this.ValueCalculateremainingamount - calcAmountDiscountPercentage
     
    
  }
// الباك خلص فاضل الفرونت ونجرب
// use when use ExpeditedPayment()=>>>>>
  ChangStatusLonaInPaymentOfistallments(){
    let GetlonaIdFrompagging= this.PaymentOfistallmentsPagging[0]['lonaId']
      
    this._PaymentOfistallmentsService.ExpeditedPayment(
      GetlonaIdFrompagging ,this.GetDiscountPercentagecontol,this.ValueCalculateremainingamount,this.TotalAmountRequier,1,
      new Date(),
      
    ).subscribe(response => {
      Swal.fire({
        title: 'تم !',
        text: 'الحفظ بنجاح',
        icon: 'success',
        confirmButtonText: 'موافق'
      });
      this.PaymentOfistallmentsPagging = null;
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
 

 


  showModalError() {
    this.modalTitle = 'Error adding  ';
    this.modalMessage = 'Error adding branches';
    $('#errorModal').modal('show'); //  declare let $: any;

  }

}