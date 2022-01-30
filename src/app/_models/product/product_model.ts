import { Category } from "./category.model";
import { Paymay } from "./paymay-type.model";
import { ProductLang } from "./product-lang.model";
import {Supplier} from "./supplier.model"
import { Tag } from "./tages.model";

 export interface Product{
    id?: number;
    price: number;
    discount?: number;
    image?: string;
    supplier?:Supplier;
    category:Category;
    paymay:Paymay[];
    data:ProductLang[];
    tag:Tag[];
    name:string

}

export interface ProductWithCounter extends Product{
cartCounter:number
}
