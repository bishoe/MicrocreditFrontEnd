import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Constants } from '../Auth/Helper/Constants';
import { User } from '../Auth/Model/user';
import { UserService } from '../Auth/Services/user.service';
@Component({
  selector: 'ngx-allusermanagement',
  templateUrl: './allusermanagement.component.html',
  styleUrls: ['./allusermanagement.component.scss']
})
export class AllusermanagementComponent implements OnInit {

  @BlockUI('user-loader') blockUI: NgBlockUI;
  // public blockUiTemplateComponent = BlockUiTemplateComponent;
  public loaderMessage: string = "loading test";
  public userList: User[] = [];
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
     this.getAllUser();

 let   Getrole=localStorage.getItem(Constants.USER_KEY)
    if(Getrole.indexOf('Admin')>-1){
      this.getAllUser();

   }else{
    if(Getrole.indexOf('User')){  
        alert('Access denied');
        this.router.navigate(["/login"]);
        return;
  }
  }}

  getAllUser() {
    this.blockUI.start();
    this.userService.getAllUser().subscribe((data: User[]) => {
      this.userList = data;
      this.blockUI.stop();
    }, () => {
      this.blockUI.stop();
    })
  }

}






















