import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/product/category.model';
import { Paymay } from 'src/app/_models/product/paymay-type.model';
import { Product } from 'src/app/_models/product/product_model';
import { Tag } from 'src/app/_models/product/tages.model';
import { CategoryService } from 'src/app/_services/product/category.service';
import { PaymentService } from 'src/app/_services/product/payment.service';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  paymayType:Paymay[] = [];
  category!:Category[];
  tag:Tag[]=[];
  product={} as Product;

  constructor(private productService:ProductService, private router:Router,private paymentTupeService:PaymentService, private categoryService:CategoryService) { 
    
  }

  ngOnInit(): void {
    this.getAllProductType()
    this.getAllCategory()
    this.getAllPaymentType()
    
  }
  getAllProductType(){
    this.paymayType= this.paymentTupeService.getAllPaymentType()
  }
  getAllCategory(){
    this.category=this.categoryService.getAllCategory()
  }
  getAllPaymentType(){
    this.paymayType=this.paymentTupeService.getAllPaymentType()
  }


  onAddProduct(form:NgForm){
    console.log(form.value)
    const product:Product=form.value;

    
    this.productService.addProduct(product)
    this.router.navigateByUrl('home')
}
onCheckBoxChanged(index:number){
  if(this.product.paymay){
    this.product.paymay=[...this.product.paymay,this.paymayType[index]]
  }else{
    this.product.paymay=[this.paymayType[index]]
    }
console.log(this.paymayType[index])
}

}