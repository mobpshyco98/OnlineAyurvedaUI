import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedSpecServiceService } from '../med-spec-service.service';
import { Medicine } from '../medicine';
import { Medspecdto } from '../medspecdto';

@Component({
  selector: 'app-edit-med-specs',
  templateUrl: './edit-med-specs.component.html',
  styleUrls: ['./edit-med-specs.component.css']
})
export class EditMedSpecsComponent implements OnInit {
  
  medSpecs: Medspecdto = new Medspecdto();
  msg: string;
  errorMsg: string;
  meds: Medicine[] = [];

  constructor(private medSpecService: MedSpecServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() { 
  }
  
  editMedSpecs(){
    this.medSpecService.editMedSpecs(this.medSpecs).subscribe(
      data=>{alert(data);this.router.navigateByUrl("viewmedspecsbyid")},
      error=>this.errorMsg = JSON.parse(error.error).message);
  }

}
