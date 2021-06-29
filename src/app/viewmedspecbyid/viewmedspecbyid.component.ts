import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private medSpecService: MedSpecServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.queryParamMap.get('medId') != null)
      this.medId = parseInt(this.route.snapshot.queryParamMap.get('medId'));
      this.searchById();
   }

  searchById(){
    this.medSpecService.viewMedSpecsById(this.medId).subscribe(data=>{console.log(data); this.medSpec=data},
      error=>{console.log(error); this.msg=undefined, this.msg=error.error.message; this.medSpec=null});
  }

}
