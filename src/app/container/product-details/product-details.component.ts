import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductWithCounter } from 'src/app/_models/product/product_model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product = {} as Product;
  relatedProduct!:Product[];
  item:ProductWithCounter[]=[];

  @Output()
  ItemRemoved:EventEmitter<ProductWithCounter>=new EventEmitter<ProductWithCounter>();


  constructor(private activatedRoute:ActivatedRoute,private productService: ProductService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params['productId'])
    this.getProductById();
    this.getRelatedProduct();

  }
  getProductById(){
    this.activatedRoute.params.subscribe(
      (params)=>{ 
        const id = +params['productId'];
    this.product = this.productService.getProductById(id)!;
    console.log(this.product)
      },
      (err)=>{ },
      ()=>{ }
    )
    
    }
    getRelatedProduct(){
      this.relatedProduct=this.productService.getAllProducts().slice(0,4);
    }
    onItemAdded(){
      this.productService.addProductToCart(this.product)
    }
    increment(item:ProductWithCounter){
      item.cartCounter++;
    }

}
