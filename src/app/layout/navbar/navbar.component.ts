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

@Output()
  ItemRemoved:EventEmitter<Product>=new EventEmitter<Product>();

  constructor(private productService:ProductService) { 
  }

  ngOnInit(): void {
   this.productService.cartHasBeenChanged.subscribe(
     (res)=>{
       this.addedProducts=res
     },
     (err)=>{},
     ()=>{}
   )
  }


  deleteCartProduct(product:Product) {
  this.ItemRemoved.emit(product);
  
  }
  
}
