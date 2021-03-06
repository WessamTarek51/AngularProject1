import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product_model';
import { ProductService } from 'src/app/_services/product/product.service';


@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.scss']
})
export class ListingItemComponent implements OnInit {
  @Input()
  productItem!:Product
   
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }

  onItemAdded(){
    console.log(this.productItem)
    this.productService.addProductToCart(this.productItem)
  }


  deleteListProduct(product:Product){
    this.productService.onlistItemRemove(product);
  }

  

}

