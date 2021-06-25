import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from './medicine.service';
import { StorageService } from './storageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineAyurveda';
  constructor(public storageservice: StorageService, public medicineservice: MedicineService, public router: Router) { }
  doLogout(): void {
    this.medicineservice.doLogout().subscribe(
      data => {
        localStorage.removeItem("userinfo");
        this.storageservice.msg = "you have logged out";
        this.storageservice.loginflag = false;
        this.router.navigateByUrl("/login");
      }
    );
  }
}
