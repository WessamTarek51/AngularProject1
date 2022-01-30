import { Component } from '@angular/core';
import { Product, ProductWithCounter } from './_models/product/product_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-project';
  // addedProduct:Product[]=[];
  testProduct:ProductWithCounter[]=[];

  // onItemAdd(product:Product){
  //   console.log(product);
  //   const newProduct: ProductWithCounter ={...product,cartCounter:1};
  //   this.addedProduct.push(newProduct);
  // }
  
  // onItemAdd(product:Product){
  //   console.log(product);
  //   for(let i of this.addedProduct){
  //     if(i.name == product.name){
  //        i.count++
  //        return
  //     }
  //   }
  //   this.addedProduct.push(product);
  // }

  // onItemRemove(producttoRemove:Produ){
  //     console.log(alert(producttoRemove.name))
  //       // this.addedProduct.forEach((Product,index)=>{
  //       //     if(Product.name == producttoRemove.name) this.addedProduct.splice(index,1);
  //       //     return this.addedProduct;
  //       //   });
  //   if(producttoRemove.cartCounter>1)
  //   producttoRemove.cartCounter-=1
  //   else
  //   this.testProduct.splice(this.testProduct.indexOf(producttoRemove),1)
  //   return this.testProduct
  // }

  
}

