import {Supplier} from "./supplier.model"

 export interface Product{
    id?: number;
    name: string;
    price: number;
    discount?: number;
    image: string;
    supplier?:Supplier;
    count:number;
}