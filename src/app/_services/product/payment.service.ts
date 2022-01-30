import { Injectable } from '@angular/core';
import { Paymay } from 'src/app/_models/product/paymay-type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  paymayType:Paymay[]=[
    {id:1,name:"cash"},
    {id:2,name:"COD"},
    {id:3,name:"paypal"},
    {id:4,name:"credit card"},
    {id:4,name:"debit card"},
    {id:5,name:"visa"},
    {id:6,name:"master card"},
    {id:7,name:"american express"},







  ]

  constructor() { }
getAllPaymentType():Paymay[] {
  return this.paymayType;
}
getById(){}
addPayment(){}
deletePayment(){}
editPayMent(){}
}
