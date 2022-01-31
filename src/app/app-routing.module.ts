import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { ProductFormComponent } from './container/product-form/product-form.component';
import { ProductItemComponent } from './container/product-item/product-item.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:ProductItemComponent},
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'product',children:[
  {path:'item',component:ProductItemComponent},
  {path:'details',component:ProductDetailsComponent},
  {path:'add',component:ProductFormComponent},
  {path:'edit/:productId',component:ProductFormComponent},
  ]},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
