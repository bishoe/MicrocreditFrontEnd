import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../Auth/Helper/Constants';
import { User } from '../Auth/Model/user';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {


  title = 'webAuth';
  constructor(private router: Router) {

    if (this.isUserlogin) {
  this.router.navigate(["/user-management"]);
    }

  }
  ngOnInit(): void {

  }
  onLogout() {
    localStorage.removeItem(Constants.USER_KEY);

  }
  get isUserlogin() {
    const user = localStorage.getItem(Constants.USER_KEY);
    return user && user.length > 0;
  }

  get user(): User {
    return JSON.parse(localStorage.getItem(Constants.USER_KEY)) as User;
  }

  get isAdmin(): boolean {
    return this.user.roles.indexOf('Admin') > -1;
  }
  get isUser(): boolean {
    return this.user.roles.indexOf('User') > -1 && !this.isAdmin;
  }
}
