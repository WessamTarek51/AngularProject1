import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product_model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  productArray!:Product[];
  filterArray!:Product[];

  totalLength:any;
  page:number=1;

  @Output()
  ItemAdded:EventEmitter<Product>=new EventEmitter<Product>();
  constructor(private productService:ProductService) { 
  }

  ngOnInit(): void {
    this.productArray=this.productService.getAllProducts();
    this.filterArray=this.productService.getFilter();
    this.totalLength = this.filterArray.length


}
// onAddItemInCart(product:Product){
//   console.log(product);
//   this.ItemAdded.emit(product);
// }
}
