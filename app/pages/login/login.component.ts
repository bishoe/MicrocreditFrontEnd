import { Component, OnInit } from '@angular/core';
 import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { User } from '../../user';
import { ResponseModel } from '../Auth/Model/responseModel';
import { Constants } from './Helper/Constants';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @BlockUI('main-loader') blockUI: NgBlockUI;
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  })
  constructor(private formBuilder: FormBuilder, private userServie: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
localStorage.removeItem('localStorageroles')
    this.blockUI.start();
    let email = this.loginForm.controls["email"].value;
    let password = this.loginForm.controls["password"].value;
    this.userServie.login(email, password).subscribe((data: ResponseModel) => {

      if (data.responseCode == 1) {

     localStorage.setItem(Constants.USER_KEY, JSON.stringify(data.dateSet));

        let user = data.dateSet as User;

        console.log(user.roles)

        localStorage.setItem("localStorageroles",user.roles[0])
        console.log( localStorage.getItem("localStorageroles"))
        
        if(user.roles.indexOf('Admin')> -1){

          this.router.navigate(["/pages/AllUserManagement"]);

        }else{
          this.router.navigate(["/pages/UserManagement"])
        }

      }
      this.blockUI.stop();
      console.log("response", data);
    }, error => {
      this.blockUI.stop();
      console.log("error", error)
    })
  }

}
