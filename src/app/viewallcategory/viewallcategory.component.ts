import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-viewallcategory',
  templateUrl: './viewallcategory.component.html',
  styleUrls: ['./viewallcategory.component.css']
})
export class ViewallcategoryComponent implements OnInit {

  categories :Category[]=[];
  msg:string;
  constructor(private categoryservice:CategoryService) { }

  ngOnInit() {
    this.categoryservice.viewallcategory().subscribe(data=>this.categories=data);
  }
  
}
