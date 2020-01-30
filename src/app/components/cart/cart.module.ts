import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CartRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class CartModule { }
