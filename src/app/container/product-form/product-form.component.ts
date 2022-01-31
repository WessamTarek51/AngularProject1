import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  editMode=false;

  constructor(
    private productService:ProductService, 
    private router:Router,
    private paymentTupeService:PaymentService, 
    private categoryService:CategoryService,
    private activatedRoute: ActivatedRoute,
  
    
    ) {}

  ngOnInit(): void {
   console.log(this.activatedRoute.snapshot.params)
   console.log(this.activatedRoute.snapshot.url[0].path)
   if(this.activatedRoute.snapshot.url[0].path=='edit'){
     this.editMode=true
   }
   if(this.editMode){
     this.getProductById();
     
   }
    this.getAllProductType()
    this.getAllCategory()
    this.getAllPaymentType()    
  }
  getProductById(){
  const id = +this.activatedRoute.snapshot.params['productId'];
  this.product = this.productService.getProductById(id)!;
  console.log(this.product)
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
    console.log(form)
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