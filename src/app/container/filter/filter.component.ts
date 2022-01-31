import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/_services/product/product.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
  seacrhProduct(seacrhInput:String){
    console.log(seacrhInput)
  }

}
