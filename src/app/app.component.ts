import { Component } from '@angular/core';
import { Product } from './_models/product/product_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-project';
  addedProduct:Product[]=[]


  
  onItemAdd(product:Product){
    console.log(product);
    for(let i of this.addedProduct){
      if(i.name == product.name){
         i.count++
         return
      }

    }
    this.addedProduct.push(product);
  }

  onItemRemove(producttoRemove:Product){
      console.log(alert(producttoRemove.name))
        this.addedProduct.forEach((Product,index)=>{
            if(Product.name == producttoRemove.name) this.addedProduct.splice(index,1);
          });

  }

  
}

