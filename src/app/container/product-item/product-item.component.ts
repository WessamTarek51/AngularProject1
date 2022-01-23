import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product_model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  productArray:Product[]=[
    {name:'pro1',price:100,image:'../../../assets/img/food1.jpeg',count:1},
    {name:'pro2',price:100,discount:50,image:'../../../assets/img/food2.jpg',count:1},
    {name:'pro3',price:100,discount:50,image:'../../../assets/img/food3.jpg',count:1},
    {name:'pro4',price:100,discount:50,image:'../../../assets/img/food4.jpeg',count:1},
    {name:'pro5',price:100,discount:50,image:'../../../assets/img/food5.jpeg',count:1},
    {name:'pro6',price:100,discount:50,image:'../../../assets/img/food6.jpeg',count:1},
    {name:'pro7',price:100,discount:50,image:'../../../assets/img/food6.jpeg',count:1},
    {name:'pro8',price:100,discount:50,image:'../../../assets/img/food6.jpeg',count:1},
  ]

  @Output()
  ItemAdded:EventEmitter<Product>=new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
}
onAddItemInCart(product:Product){
  console.log(product);
  this.ItemAdded.emit(product);
}
}
