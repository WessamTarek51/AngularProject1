import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product_model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
@Input()
addedProducts !:Product[]

@Output()
  ItemRemoved:EventEmitter<Product>=new EventEmitter<Product>();

dropDownOpen=false;
  constructor() { }

  ngOnInit(): void {
  }


  deleteCartProduct(product:Product) {
  this.ItemRemoved.emit(product);
  
  }
}
