import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidatorService } from '../pages/Microcredit/Services/Validator/validator.service';
import { CustomersService } from '../pages/Microcredit/Services/customers/customers.service';
import { MainService } from '../pages/Microcredit/Services/main.service';
import { URLPathModule } from '../pages/Microcredit/Classes/urlpath/urlpath/urlpath.module';
import { IProducts } from '../pages/Microcredit/Classes/iproducts';
import Swal from 'sweetalert2';
import { Constants } from '../pages/login/Helper/Constants';

@Component({
  selector: 'ngx-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  errorList: string[];
  modalMessage: string;
  modalTitle: string;
  _prodouctsID;
  UpdateProductForm:FormGroup;
  EditProductForm:IProducts;

  prodouctsID;
  prodouctName : FormControl;
  DateAdd? :Date;
 notes : string;
 // barCodeText : string;
 UsersID? : Number


  constructor(private fb: FormBuilder,private _activatedRoute: ActivatedRoute,
    private validatorService: ValidatorService,private _MainService: MainService,private _URLPathModule: URLPathModule,private router: Router
   ){}
  ngOnInit(): void {
    //#region  

    let   Getrole=localStorage.getItem(Constants.USER_KEY)

    if(Getrole.indexOf('Admin')>-1){
    this.UpdateProductForm= this.fb.group({
      prodouctsID:this.prodouctsID,
      prodouctName:this.prodouctName,
      DateAdd:this.DateAdd,
      notes:this.notes,
      UsersID:this.UsersID

    })

    this.GETIDFROMURL()
    this.SETdataTOFORMCONTROL()

  }else if(Getrole.indexOf('user')){  
    alert('Access denied');
    this.router.navigate(["/login"]);
    return;
  }
  }


//GETID FROM URL
GETIDFROMURL(){
  //GET ID FROM URL Pagging
  this.prodouctsID= this._activatedRoute.snapshot.params['prodouctsID'];
 }
SETdataTOFORMCONTROL(){
 this._MainService.GETByIdAsync(  this.prodouctsID,this._URLPathModule.ProductsURL).subscribe(data => {

this.EditProductForm = data;

 this.UpdateProductForm.patchValue
({

  prodouctsID : this.EditProductForm.prodouctsID,//set id in object
  prodouctName: this.EditProductForm.prodouctName,
  DateAdd:this.EditProductForm.DateAdd,
  notes:this.EditProductForm.notes,
  UsersID:this.EditProductForm.UsersID
  });
    
 });}
UpdateProducts() {
  let UpdateProductForm = this.UpdateProductForm.value;
  console.log(UpdateProductForm)
  this.errorList = [];
  //console.log('>>>>',this._activatedRoute.snapshot.params['customerId'])
  
  this._MainService.UpdateAsync(this.prodouctsID,  UpdateProductForm,this._URLPathModule.ProductsURL).subscribe(
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
  

  showModalError() {
    this.modalTitle = 'Error Update  ';
    this.modalMessage = 'Error Update product';
    
   
   }
}
