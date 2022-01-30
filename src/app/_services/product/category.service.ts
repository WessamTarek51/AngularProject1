import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category:Category[]=[
    {id:1,name:"food"},
    {id:2,name:"clothing"},
    {id:3,name:"electric"},
    {id:4,name:"baby"},
    {id:5,name:"toys"},
    {id:6,name:"home"},
  ]


  constructor() { }
  getAllCategory():Category[] {
    return this.category;
  }
  getById(){}
  addCategory(){}
  deleteCategory(){}
  editCategory(){}
  
}
