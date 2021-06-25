import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Logindto } from '../logindto';
import { MedicineService } from '../medicine.service';
import { StorageService } from '../storageservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Logindto = new Logindto();

  constructor(public router: Router, public storageservice: StorageService, public medicineservice:MedicineService) {
    this.storageservice.loginflag=false;
  }

  ngOnInit() {
  }
  doLogin(): void {
    this.login.password = this.medicineservice.encryptString(this.login.password);
    console.log(this.login.password);
    console.log(this.login.customerId);
    this.medicineservice.doLogin(this.login).subscribe(
      data => {
        localStorage.setItem("userinfo", JSON.stringify(data));
        this.storageservice.loginflag = true;
        this.storageservice.username = JSON.parse(localStorage.getItem("userinfo")).userName;
        this.router.navigateByUrl("/");
        this.storageservice.msg = undefined;
      },
      error => {
        console.log(error);
        this.storageservice.msg = "Incorrect username & password";
        this.storageservice.loginflag = false;
        this.router.navigateByUrl("/login");
      }
    );

  }
}


