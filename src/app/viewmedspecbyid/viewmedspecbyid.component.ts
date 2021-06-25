import { Component, OnInit } from '@angular/core';
import { MedSpecServiceService } from '../med-spec-service.service';
import { Medspec } from '../medspec';

@Component({
  selector: 'app-viewmedspecbyid',
  templateUrl: './viewmedspecbyid.component.html',
  styleUrls: ['./viewmedspecbyid.component.css']
})
export class ViewmedspecbyidComponent implements OnInit {
  medSpec:Medspec=null;
  medId:number;
  msg:string;

  constructor(private medSpecService: MedSpecServiceService) { }

  ngOnInit() { }

  searchById(){
    this.medSpecService.viewMedSpecsById(this.medId).subscribe(data=>{this.medSpec=data, this.msg=undefined},
      error=>{console.log(error); this.msg=error.error.message; this.medSpec=null});
  }

}
