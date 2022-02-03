import { EventEmitter, Injectable } from "@angular/core";
import { Product, ProductWithCounter } from "src/app/_models/product/product_model";
@Injectable({
    providedIn: 'root'
  })
export class ProductService{
    productsArray:Product[]=[
    {price:80,image:'../../../assets/img/burger.jpeg',name:"burger", id:1,
    data:[{description:"best burgar",lan:{name:"arbic"},id:1}],
    category:{name:"food",id:1},
    tag:[{name:"food"}],
    paymay:[{name:"cash"}],
  },
  {price:70,image:'../../../assets/img/chicken.jpeg',discount:5,name:"chicken",id:2,
  data:[{ description:"best chicken",lan:{name:"arbic"},id:2}],
  category:{name:"food",id:1},
  tag:[{name:"food"}],
  paymay:[{name:"COD"}],
},
{price:60,image:'../../../assets/img/pizza.jpeg',discount:8,name:"pizza",id:3,
data:[{ description:"best pizza",lan:{name:"arbic"},id:3}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:40,image:'../../../assets/img/pasta.jpg',discount:10,name:"pasta",id:4,
data:[{ description:"best pasta",lan:{name:"arbic"},id:4}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"COD"}],

},
{price:15,image:'../../../assets/img/potato.jpg',name:"patato",id:5,
data:[{ description:"best patato",lan:{name:"arbic"},id:5}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:30,image:'../../../assets/img/rice.jpeg',name:"rice",id:6,
data:[{ description:"best rice",lan:{name:"arbic"},id:6}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:110,image:'../../../assets/img/zenger.jpg',name:"zenger",id:7,
data:[{ description:"best zenger",lan:{name:"arbic"},id:7}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:20,image:'../../../assets/img/food2.jpg',name:"cheese",id:8,
data:[{ description:"best cheese",lan:{name:"arbic"},id:8}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:110,image:'../../../assets/img/kofta.jpg',name:"Kofta",id:9,
data:[{ description:"best Kofta",lan:{name:"arbic"},id:9}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:10,image:'../../../assets/img/tea.jpeg',name:"Tea",id:10,
data:[{ description:"best Tea",lan:{name:"arbic"},id:10}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:25,image:'../../../assets/img/coffe.jpeg',name:"Coffe",id:11,
data:[{ description:"best Coffe",lan:{name:"arbic"},id:11}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:25,image:'../../../assets/img/mango.jpg',discount:5,name:"Mango",id:12,
data:[{ description:"best Mango",lan:{name:"arbic"},id:12}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},  
{price:20,image:'../../../assets/img/orange.jpeg',name:"Orange",id:13,
data:[{ description:"best Orange",lan:{name:"arbic"},id:13}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},  
{price:22,image:'../../../assets/img/sta.jpeg',discount:4,name:"Sterwbray",id:14,
data:[{ description:"best Sterwbray",lan:{name:"arbic"},id:14}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

},
{price:15,image:'../../../assets/img/lemon.jpeg',name:"Lemon",id:15,
data:[{ description:"best Lemon",lan:{name:"arbic"},id:15}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

}, 
{price:35,image:'../../../assets/img/pom.jpg',discount:3,name:"pomegranate",id:16,
data:[{ description:"best pomegranate",lan:{name:"arbic"},id:16}],
category:{name:"food",id:1},
tag:[{name:"food"}],
paymay:[{name:"cash"}],

}, 
{price:35,image:'../../../assets/img/ki.jpg',name:"Kiwi",id:17,
data:[{ description:"best Kiwi",lan:{name:"arbic"},id:17}],
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
     this.filterProduct.push(product);
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
