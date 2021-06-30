import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedSpecServiceService } from '../med-spec-service.service';
import { Medicine } from '../medicine';
import { Medspecdto } from '../medspecdto';

@Component({
  selector: 'app-add-med-specs',
  templateUrl: './add-med-specs.component.html',
  styleUrls: ['./add-med-specs.component.css']
})
export class AddMedSpecsComponent implements OnInit {

  medSpecs: Medspecdto = new Medspecdto();
  meds: Medicine[] = [];
  msg: string;
  errorMsg: string;
  errors: string;
  medId:number;

  @ViewChild("form")
  form: NgForm

  constructor(private medSpecService: MedSpecServiceService) { }

  ngOnInit() { }

  addMedSpecs(){
    this.medSpecService.addMedSpecs(this.medSpecs).subscribe((data)=>{console.log(data);
                                                  this.msg=JSON.parse(data).message; this.errorMsg=undefined; this.errors = undefined;
                                                  this.medSpecs=new Medspecdto(); this.form.reset()},
    
     error=>{console.log(error);
             this.errorMsg = JSON.parse(error.error).message; 
             this.msg=undefined;
             this.errors = JSON.parse(error.error).messages} 
            );
  }

}
