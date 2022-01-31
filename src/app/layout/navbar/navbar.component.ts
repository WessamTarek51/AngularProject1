import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductWithCounter } from 'src/app/_models/product/product_model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
addedProducts :ProductWithCounter[]=[];
dropDownOpen=false;
totalPrice=0;

@Output()
  ItemRemoved:EventEmitter<ProductWithCounter>=new EventEmitter<ProductWithCounter>();

  constructor(private productService:ProductService) { 
  }

  ngOnInit(): void {
   this.productService.cartHasBeenChanged.subscribe(
     (res)=>{
       this.addedProducts=res
       this.calculateTotal();
     },
     (err)=>{},
     ()=>{}
   )
  }

  calculateTotal(){
  
    console.log(this.addedProducts.length)
        this.totalPrice=0;
     for( let item of this.addedProducts){
       if(item.discount==null){
        this.totalPrice+=(item.price*item.cartCounter)
       }
       else{
         this.totalPrice+=((item.price*item.cartCounter) - (item.discount*item.cartCounter))
       }

     }
  }

  deleteCartProduct(product:ProductWithCounter) {
  // this.ItemRemoved.emit(product);
  this.productService.onItemRemove(product)
  
  }
  
}
