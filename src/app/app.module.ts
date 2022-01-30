import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ListingItemComponent } from './container/listing-item/listing-item.component';
import { FilterComponent } from './container/filter/filter.component';
import { ProductItemComponent } from './container/product-item/product-item.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ProductFormComponent } from './container/product-form/product-form.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
// import { ProductService } from './_services/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ListingItemComponent,
    FilterComponent,
    ProductItemComponent,
    DropdownComponent,
    ProductFormComponent,
    ProductDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
