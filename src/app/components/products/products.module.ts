import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    ProductsRoutingModule,
    FormsModule,
    SharedModule,
    CommonModule
  ]
})
export class ProductsModule { }
