import { EventEmitter, Injectable } from "@angular/core";
import { Product, ProductWithCounter } from "src/app/_models/product/product_model";
@Injectable({
    providedIn: 'root'
  })
export class ProductService{
    productsArray:Product[]=[
    {price:50,image:'../../../assets/img/food1.jpeg',name:"humburgar", id:1,
    data:[{description:"best humburgar",lan:{name:"arbic"},id:1}],
    category:{name:"food",id:1},
    tag:[{name:"food"}],
    paymay:[{name:"cash"}],
  },
  {price:40,image:'../../../assets/img/food2.jpg',discount:5,name:"cheese",id:2,
  data:[{ description:"best cheese",lan:{name:"arbic"},id:2}],
  category:{name:"food",id:1},
  tag:[{name:"food"}],
  paymay:[{name:"COD"}],

},
{price:100,image:'../../../assets/img/food3.jpg',discount:8,name:"pizza",id:3,
data:[{ description:"best pizza",lan:{name:"arbic"},id:3}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:120,image:'../../../assets/img/food4.jpeg',discount:10,name:"pasta",id:4,
data:[{ description:"best pasta",lan:{name:"arbic"},id:4}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"COD"}],

},
{price:60,image:'../../../assets/img/food5.jpeg',name:"rice",id:5,
data:[{ description:"best rice",lan:{name:"arbic"},id:5}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:110,image:'../../../assets/img/food6.jpeg',name:"chicken",id:6,
data:[{ description:"best chicken",lan:{name:"arbic"},id:6}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:110,image:'../../../assets/img/food6.jpeg',name:"chicken",id:7,
data:[{ description:"best chicken",lan:{name:"arbic"},id:7}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:110,image:'../../../assets/img/food6.jpeg',name:"chicken",id:8,
data:[{ description:"best chicken",lan:{name:"arbic"},id:8}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
  
    
  ];


private cartArray: ProductWithCounter[]=[];
cartHasBeenChanged: EventEmitter<ProductWithCounter[]>= new EventEmitter<ProductWithCounter[]>();
private filterProduct: Product[]=[];


constructor(){
  for(let i of this.productsArray){
  this.filterProduct.push(i);
  }
    }

    search(seacrhInput:string){
     this.filterProduct.splice(0,this.filterProduct.length);
     for(let i of this.productsArray){
       if(i.name.includes(seacrhInput)){
         this.filterProduct.push(i)
       }
     }
     console.log(this.filterProduct.length)
    }

    getFilter(): Product[]{
      return this.filterProduct 
    }

    getAllProducts(): Product[]{
        return this.productsArray }

    getProductById(id:number){
      return this.productsArray.find(product => product.id===id)
    }

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
        this.cartHasBeenChanged.emit(this.cartArray);
        return
    }
   }
    this.cartArray.push(newProduct);
    this.cartHasBeenChanged.emit(this.cartArray);
    }
    
    onItemRemove(productRemoved:ProductWithCounter){
            console.log(alert(productRemoved.name))
          if(productRemoved.cartCounter>1)
          productRemoved.cartCounter-=1
          else
          this.cartArray.splice(this.cartArray.indexOf(productRemoved),1)
          this.cartHasBeenChanged.emit(this.cartArray);
          return this.cartArray
        }


    onlistItemRemove(productRemoved:Product){
          console.log(alert(productRemoved.name))
        
        this.productsArray.splice(this.productsArray.indexOf(productRemoved),1)        
        this.filterProduct.splice(this.filterProduct.indexOf(productRemoved),1)
        return this.productsArray
      
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
