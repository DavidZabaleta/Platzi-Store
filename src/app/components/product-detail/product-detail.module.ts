import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    ProductDetailRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ProductDetailModule { }
