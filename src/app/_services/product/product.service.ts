import { EventEmitter, Injectable } from "@angular/core";
import { Product, ProductWithCounter } from "src/app/_models/product/product_model";
@Injectable({
    providedIn: 'root'
  })
export class ProductService{
    productsArray:Product[]=[
    {price:50,image:'../../../assets/img/food1.jpeg',name:"humburgar", 
    data:[{description:"best humburgar",lan:{name:"arbic"}}],
    category:{name:"food"},
    tag:[{name:"food"}],
    paymay:[{name:"cash"}],
  
  },
  {price:40,image:'../../../assets/img/food2.jpg',discount:5,name:"cheese",
  data:[{ description:"best cheese",lan:{name:"arbic"}}],
  category:{name:"food"},
  tag:[{name:"food"}],
  paymay:[{name:"COD"}],

},
{price:100,image:'../../../assets/img/food3.jpg',discount:8,name:"pizza",
data:[{ description:"best pizza",lan:{name:"arbic"}}],
category:{name:"food"},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:120,image:'../../../assets/img/food4.jpeg',discount:10,name:"pasta",
data:[{ description:"best pasta",lan:{name:"arbic"}}],
category:{name:"food"},
tag:[{name:"food"}],
paymay:[{name:"COD"}],

},
{price:60,image:'../../../assets/img/food5.jpeg',name:"rice",
data:[{ description:"best rice",lan:{name:"arbic"}}],
category:{name:"food"},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:110,image:'../../../assets/img/food6.jpeg',name:"chicken",
data:[{ description:"best chicken",lan:{name:"arbic"}}],
category:{name:"food"},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:110,image:'../../../assets/img/food6.jpeg',name:"chicken",
data:[{ description:"best chicken",lan:{name:"arbic"}}],
category:{name:"food"},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:110,image:'../../../assets/img/food6.jpeg',name:"chicken",
data:[{ description:"best chicken",lan:{name:"arbic"}}],
category:{name:"food"},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
  
    
  ];
private cartArray: ProductWithCounter[]=[];
cartHasBeenChanged: EventEmitter<ProductWithCounter[]>= new EventEmitter<ProductWithCounter[]>();
constructor(){
    }
    getAllProducts(): Product[]{
        return this.productsArray;
    }
    getAllProductById(){}
    addProduct(product:Product){    
     this.productsArray.push(product);

    }
    updateProduct(){}
    addProductToCart(product:Product){
    console.log(product);
   const newProduct: ProductWithCounter ={...product,cartCounter:1};
   for(let i of this.cartArray){
    if(i.name == product.name){
        i.cartCounter++;
        return
    }
   }
    this.cartArray.push(newProduct);
    this.cartHasBeenChanged.emit(this.cartArray);
    }
    
    deleteProduct(productRemoved:Product){
        let index = this.productsArray.indexOf(productRemoved);
        if (index !== -1) {
          this.productsArray.splice(index, 1);
        }
      }
    }
    


// console.log(alert(producttoRemove.name))
//         // this.addedProduct.forEach((Product,index)=>{
//         //     if(Product.name == producttoRemove.name) this.addedProduct.splice(index,1);
//         //     return this.addedProduct;
//         //   });
//     if(producttoRemove.count>1)
//     producttoRemove.count-=1
//     else
//     this.addedProduct.splice(this.addedProduct.indexOf(producttoRemove),1)
//     return this.addedProduct
//   }
