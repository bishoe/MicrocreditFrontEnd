import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { title } from 'process';
import Swal from 'sweetalert2';
import { CustomersService } from '../Microcredit/Services/customers/customers.service';

@Component({
  selector: 'ngx-main-add-new-lona',
  templateUrl: './main-add-new-lona.component.html',
  styleUrls: ['./main-add-new-lona.component.scss']
})
export class MainAddNewLonaComponent implements OnInit {
// SearchCustomerBycode
GetCustomername;//SearchCustomerBycode
TextSearchCustomercode;
GetCustomerCode;
GetcustomerNationalid;
// end SearchCustomerBycode
_AddNewLonaForm :FormGroup;
_TextSearchCustomercode;

  constructor(private fb: FormBuilder,private router:Router,private _CustomersService:CustomersService) {
   }
  ngOnInit(): void {
    this._AddNewLonaForm =this.fb.group({
      TextSearchCustomercode:[''],
      ProdcutId:['',Validators.required],
  })
}
SearchCustomerBycode() { 
  localStorage.removeItem('localCustomeridSearchText')
  localStorage.removeItem('LocalGetCustomerInfo')
  localStorage.removeItem('LocalGETLengthLonaForCustomer')
  this._TextSearchCustomercode= this.TextSearchCustomercode;
  this._TextSearchCustomercode =this._AddNewLonaForm.get('TextSearchCustomercode').value
  let GetCustomerCode = this._AddNewLonaForm.get('TextSearchCustomercode').value
  this._CustomersService.GETCustomersByIdAsync(GetCustomerCode).subscribe(
    (resultcode) => {
if(resultcode ==null)Swal.fire({
  text:'الكود غير صحيح',
 icon:'error',


});
  
window.stop()
});

this._CustomersService.SearchCustomerStatusIdAsync(this._TextSearchCustomercode).subscribe(
  (GetCustomerInfo) => {
    console.log(GetCustomerInfo)

    if(GetCustomerInfo ==''){
      this.router.navigate(['/pages/addnewlona', this._AddNewLonaForm.get('TextSearchCustomercode').value])
      
// console.log(this._AddNewLonaForm.get('TextSearchCustomercode').value)
    }else{
      localStorage.removeItem('localCustomeridSearchText')
      localStorage.removeItem('LocalGetCustomerInfo')
      localStorage.removeItem('LocalGETLengthLonaForCustomer')

   localStorage.setItem("localCustomeridSearchText",GetCustomerInfo[0].customerId)
   localStorage.setItem("LocalGetCustomerInfo",JSON.stringify(GetCustomerInfo))
    localStorage.setItem("LocalGETLengthLonaForCustomer",JSON.stringify(GetCustomerInfo.length))// return number ex..2
    let GETLengthLonaForCustomer =JSON.parse(localStorage.getItem("LocalGETLengthLonaForCustomer"))

if (GetCustomerInfo[0]['maxLonaForCustomer'] == GETLengthLonaForCustomer){ 
Swal.fire({text:'عفوا العميل تخطى الحد المسموح به للاقتراض',icon:'info',
showCancelButton:true,showConfirmButton:false
 

});
window.stop()
 return;
}}
this.router.navigate(['/pages/addnewlona', this._AddNewLonaForm.get('TextSearchCustomercode').value ])

  // console.log(GetCustomerInfo) 
});



//  هنا عايز اشيك لو اقصى قروض ممسوح للشخص واشيك على واخد قروض مصدر ولالا



 }


}

//#region 
//   SearchCustomerBycode() { 
//     this._TextSearchCustomercode= this.TextSearchCustomercode;
//     this._TextSearchCustomercode =this._AddNewLonaForm.get('TextSearchCustomercode').value
//     let GetCustomerCode = this._AddNewLonaForm.get('TextSearchCustomercode').value
//     this._CustomersService.GETCustomersByIdAsync(GetCustomerCode).subscribe(
//       (resultcode) => {
//   if(resultcode ==null)Swal.fire({
//     title:'تحذير', 
//     text:'الكود غير صحيح ',
//    icon:'error',
//    timer:1500,
   
//  });
       
// });

//    this._CustomersService.SearchCustomerStatusIdAsync(this._TextSearchCustomercode).subscribe(
//  (result) => {
//   localStorage.setItem("localCustomeridSearchText",result[0].customerId)
//   console.log(result) 

//  // this.GETCustomerIDSearchText = result;
//  if(result ==null){
// //  Swal.fire({ title:'تحذير', text:' ', icon:'error', timer:1500,})
// //  console.log(result) 
//  //return;
// }else{
//   this._TextSearchCustomercode =this._AddNewLonaForm.get('TextSearchCustomercode').value
//    this._CustomersService.SearchLonaGuarantorStatusIdAsync(this._TextSearchCustomercode).subscribe(
// (resultLonaGuarantor) => {
 
// if(resultLonaGuarantor[0].InputLonaGuarantor ==this._TextSearchCustomercode  && resultLonaGuarantor[0].statusLona ==0){
//   Swal.fire({
//     title:'تحذير', 
//     text:' لايمكن للضامن ان يكون عميل والقرض مصدر  ',
//    icon:'error',       
//  })
//  return;
// }
// });
// }
//  if (result.length > result[0].maxLonaForCustomer){
//       Swal.fire({
//         title:'تحذير', 
//         text:'تجاوز اقصى عدد قروض مسموح للعميل 1 قرض  ',
//        icon:'error',
//        timer:1500,
//      })
// return;
//     }else{
//       this._CustomersService.SearchCustomerStatusIdAsync(this._TextSearchCustomercode).subscribe(
//         (result) => {
//           if(result.length > result[0].maxLonaForCustomer  || result.length == result[0].maxLonaForCustomer){
//         Swal.fire({
//           title:'تحذير', 
//           text:' عفوا  العميل  تخطى الحد المسموح للاقتراض '  ,
//          icon:'error',       
//        })
//        return;
//       }
//       });
//         this.router.navigate(['/pages/addnewlona', localStorage.getItem("localCustomeridSearchText")])
//       }
// })
// }

//#endregion



 
